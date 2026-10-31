"""Audit existing Sentence-v1 quotations against numbered translation paragraphs.

Uses only repository files and Poppler; never rewrites a PDF. Run with --write
to refresh the review after manually checking source-paragraph corrections.
The default mode checks the committed review without changing any files.
"""
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys
import unicodedata

ROOT = Path(__file__).resolve().parents[1]
REVIEW = ROOT / "docs/reviews/sentence-v1-reading-links.json"


def normalize(value):
    # PDF line wraps, ligatures, hyphens and quote glyphs are presentation only.
    return re.sub(r"[^a-z0-9]", "", unicodedata.normalize("NFKC", value).lower())


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def audit():
    fixture = json.loads((ROOT / "scripts/fixtures/sentence-v1-source.json").read_text())
    indexes = {}
    pdf_pages = {}
    for year in range(1998, 2027):
        source = f"english/translation/reading-{year}-translation.md"
        markdown = (ROOT / "content" / source).read_text()
        attachment = re.search(r'^attachment: "([^"]+)"$', markdown, re.M)[1]
        links = re.findall(r"\[Text ([1-4]) · 第 (\d+) 页\]\(([^)]+)\)", markdown)
        assert len(links) == 4 and {t for t, _, _ in links} == set("1234"), source
        pdf = ROOT / "content" / attachment
        pages = subprocess.check_output(["pdftotext", str(pdf), "-"], text=True).split("\f")
        if not pages[-1].strip():
            pages.pop()
        starts = {}
        for text, page, href in links:
            text, page = int(text), int(page)
            assert href == f"/files/{attachment}#page={page}", source
            assert re.search(rf"^Text\s+{text}\s*$", pages[page - 1], re.M), (source, text, page)
            starts[str(text)] = page
        assert list(starts.values()) == sorted(set(starts.values())), source
        indexes[year] = {
            "year": year, "path": source, "attachment": attachment,
            "pdfSha256": sha256(pdf.read_bytes()), "pageCount": len(pages), "textPages": starts,
        }
        pdf_pages[year] = pages

    entries = []
    for source in fixture["entries"]:
        year, text = source["year"], source["text"]
        markdown = (ROOT / "content" / source["path"]).read_text()
        quote = re.search(r"^## 原句\s+> ([^\n]+)", markdown, re.M)[1]
        assert sha256(re.sub(r"\s+", " ", quote).strip().encode()) == source["originalSentenceSha256"]
        index = indexes[year]
        start = index["textPages"][str(text)]
        end = index["textPages"].get(str(text + 1), index["pageCount"] + 1) - 1
        passage = "\n".join(pdf_pages[year][start - 1:end])
        # Standalone paragraph headings exclude repeated quotations in notes.
        chunks = re.split(r"^第\s*(\d+)\s*段\s*$", passage, flags=re.M)
        matches = [int(chunks[i]) for i in range(1, len(chunks), 2)
                   if normalize(quote) in normalize(re.split(r"[\u3400-\u9fff]", chunks[i + 1])[0])]
        assert len(matches) == 1, (source["code"], matches)
        # Independently check the year/Text against the already published exam.
        exam = ROOT / "content/english/exams" / f"{year}英一.pdf"
        exam_text = subprocess.check_output([
            "pdftotext", "-f", str(text + 1), "-l", str(text + 1), str(exam), "-"
        ], text=True)
        if source["code"] == "F20":
            # Existing exam extraction corrupts 2½ as 2’/.; the complete quote
            # (including 2½) is matched against the translation PDF above.
            assert all(normalize(part) in normalize(exam_text) for part in quote.split("2½"))
        else:
            assert normalize(quote) in normalize(exam_text), source["code"]
        entries.append({
            "code": source["code"], "path": source["path"], "year": year, "text": text,
            "sourceParagraph": source["paragraph"], "translationParagraph": matches[0],
            "translationIndex": index["path"], "textStartPage": start,
            "href": f"/files/{index['attachment']}#page={start}",
            "indexHref": f"/english/{sha256(index['path'].encode())[:24]}/#按文章阅读",
            "target": "text-start", "originalSentenceSha256": source["originalSentenceSha256"],
        })
    assert len(entries) == 74
    assert len({(entry["year"], entry["text"]) for entry in entries}) == 37
    return {"version": 1, "reviewedAt": "2026-10-26", "indexes": list(indexes.values()), "entries": entries}


if __name__ == "__main__":
    result = audit()
    if sys.argv[1:] == ["--write"]:
        REVIEW.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    else:
        assert not sys.argv[1:], "Usage: review-sentence-reading.py [--write]"
        assert result == json.loads(REVIEW.read_text()), "Review is stale; inspect differences before --write"
    print("Verified 29 translation indexes / 116 Text starts / 74 quotations in 37 articles.")
