import type {Section} from './model';
import config from '../site.config.json';

export interface WritingTemplate {
  id: string;
  label: string;
  section: Section;
  description: string;
  body: string;
}

// These are editor scaffolds, never entries in content/ or the search index.
export const writingTemplates: WritingTemplate[] = [
  {
    id: 'lecture', label: '数学文档', section: 'notes',
    description: '围绕一个主题整理定义、定理与推导，放入讲义。',
    body: '## 问题与背景\n\n## 定义与前提\n\n## 主要结论\n\n## 证明与推导\n\n证明：\n\n## 方法总结\n\n## 参考资料\n',
  },
  {
    id: 'solution', label: '习题分享', section: 'problems',
    description: '记录完整解答、关键步骤与方法比较，放入题库与作答。',
    body: '## 题目与来源\n\n<!-- 填写书名、版本、页码、题号及题干；已有题目条目时，粘贴其网页地址。 -->\n\n## 解题思路\n\n## 完整解答\n\n解：\n\n## 方法总结\n\n<!-- 已有题目条目时，在其正文中补上本篇解答的链接。 -->\n',
  },
  {
    id: 'reflection', label: '学习感悟', section: 'essays',
    description: '记录学习中的困惑、认识变化与复盘，放入文章。',
    body: '## 这次遇到的问题\n\n## 我原先的理解\n\n## 哪一步改变了认识\n\n## 仍未解决的问题\n\n## 下一次如何尝试\n',
  },
  {
    id: 'problem', label: '题目收录', section: 'problems',
    description: '先保存题干、来源与待研究的问题；有解答后再相互链接。',
    body: '## 题目\n\n## 来源与编号\n\n<!-- 填写书名、版本、页码及原题号。 -->\n\n## 所需知识与难度\n\n## 思考记录\n\n## 解答状态\n\n尚未整理。\n\n<!-- 有独立解答后，用其真实网页地址添加链接，并在解答页链接回本题。 -->\n',
  },
  {
    id: 'book', label: '书籍收录', section: 'books',
    description: '记录作者、版本、先修要求与阅读进度，放入书架。',
    body: '## 书目信息\n\n- 作者：\n- 版本与出版社：\n- 出版年份：\n\n## 适合什么阶段阅读\n\n## 先修知识\n\n## 阅读状态与进度\n\n## 值得精读的章节\n\n## 阅读笔记与评价\n',
  },
];

export function writingTemplateMarkdown(template: WritingTemplate): string {
  return `---\ntitle: "填写标题"\ndescription: ""\nsubject: ""\ntags: [${template.label}]\n---\n\n${template.body}`;
}

export function writingTemplateUrl(template: WritingTemplate): string {
  const params = new URLSearchParams({
    filename: `${template.id}.md`,
    value: writingTemplateMarkdown(template),
  });
  return `https://github.com/${config.repository}/new/main/content/${template.section}?${params}`;
}
