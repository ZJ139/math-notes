import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const script = readFileSync(new URL('../public/fragment-navigation.js', import.meta.url), 'utf8') + '\n'
  + readFileSync(new URL('../public/site.js', import.meta.url), 'utf8');

function page(initialHash = '', reducedMotion = false) {
  const location = new URL('https://example.org/math-notes/english/article/?q=reading' + initialHash);
  const historyEntries = ['https://example.org/math-notes/english/reading-answers/', location.href];
  const listeners = new Map<string, (() => void)[]>();
  const clicks: ((event: any) => void)[] = [];
  const state = {filter: 'reading'};
  let replacements = 0;
  class Target {
    attributes = new Map<string, string>();
    parentElement: Target | null = null;
    tagName = 'H3';
    open = false;
    tabIndex = -1;
    focused = false;
    scrolls: any[] = [];
    events = new Map<string, () => void>();
    hasAttribute(name: string) { return this.attributes.has(name); }
    setAttribute(name: string, value: string) { this.attributes.set(name, value); }
    removeAttribute(name: string) { this.attributes.delete(name); }
    addEventListener(name: string, callback: () => void) { this.events.set(name, callback); }
    focus(options: any) { assert.equal(options.preventScroll, true); this.focused = true; }
    scrollIntoView(options: any) { this.scrolls.push(options); }
  }
  const targets = new Map(['q21', 'evidence-q21', 'question-q21', 'reading-summary', '中文'].map(id => [id, new Target()]));
  const document = {
    querySelector: () => null,
    getElementById: (id: string) => targets.get(id) ?? null,
    documentElement: {classList: new Set<string>()},
    addEventListener: (_name: string, callback: (event: any) => void) => clicks.push(callback),
  };
  const history = {
    state,
    replaceState(value: unknown, _title: string, href: string) {
      assert.equal(value, state);
      location.href = href;
      historyEntries[historyEntries.length - 1] = href;
      replacements++;
    },
  };
  function addEventListener(name: string, callback: () => void) {
    listeners.set(name, [...listeners.get(name) ?? [], callback]);
  }
  function dispatchEvent(event: {type: string}) { listeners.get(event.type)?.forEach(callback => callback()); }
  vm.runInNewContext(script, {document, location, history, URL, Event, addEventListener, dispatchEvent,
    matchMedia: () => ({matches: reducedMotion})});
  function click(href: string, options: Record<string, unknown> = {}) {
    const link = {href, target: options.target ?? '', hasAttribute: (name: string) => name === 'download' && options.download};
    const event = {button: 0, defaultPrevented: false, ...options, target: {closest: () => link},
      preventDefault() { this.defaultPrevented = true; }};
    clicks.forEach(callback => callback(event));
    return event.defaultPrevented;
  }
  return {click, targets, location, history, historyEntries, state, addEventListener, dispatchEvent, Target,
    replacements: () => replacements};
}

test('question, evidence, answer and section jumps reuse one history entry; Back returns to the directory', () => {
  const p = page('#question-q21');
  for (const id of ['evidence-q21', 'q21', 'question-q21', 'reading-summary', 'evidence-q21']) {
    assert.equal(p.click('#' + id), true);
    assert.equal(p.historyEntries.length, 2);
    assert.equal(p.location.hash, '#' + id);
    assert.equal(p.location.search, '?q=reading');
    assert.ok(p.targets.get(id)!.focused);
    assert.ok(p.targets.get(id)!.hasAttribute('data-fragment-target'));
    assert.equal([...p.targets.values()].filter(target => target.hasAttribute('data-fragment-target')).length, 1);
  }
  assert.equal(p.history.state, p.state);
  p.historyEntries.pop();
  assert.equal(p.historyEntries.at(-1), 'https://example.org/math-notes/english/reading-answers/');
});

test('cross-page links, PDF fragments, changed queries, missing targets and special clicks stay native', () => {
  const p = page();
  for (const href of ['/math-notes/english/other/#q21', '/files/paper.pdf#page=3', '?q=other#q21',
    'https://elsewhere.org/math-notes/english/article/?q=reading#q21', '#missing', '#%E0%A4%A', '#']) {
    assert.equal(p.click(href), false, href);
  }
  for (const options of [{ctrlKey: true}, {metaKey: true}, {altKey: true}, {shiftKey: true},
    {button: 1}, {target: '_blank'}, {target: 'reader'}, {download: true}, {defaultPrevented: true}]) {
    p.click('#q21', options);
  }
  assert.equal(p.replacements(), 0);
  assert.equal(p.click(p.location.href + '#q21', {target: '_self'}), true);
});

test('encoded headings, collapsed sections, focus and reduced motion remain usable', () => {
  const p = page('', true);
  const target = p.targets.get('中文')!;
  const details = new p.Target();
  details.tagName = 'DETAILS';
  target.parentElement = details;
  let notified = false;
  p.addEventListener('fragmentnavigation', () => { notified = true; });
  assert.equal(p.click('#' + encodeURIComponent('中文')), true);
  assert.ok(notified);
  assert.ok(details.open);
  assert.ok(target.focused);
  assert.equal(target.scrolls[0].behavior, 'instant');
  assert.equal(target.attributes.get('tabindex'), '-1');
  target.events.get('blur')!();
  assert.equal(target.hasAttribute('tabindex'), false);
});

test('direct fragments and native history changes keep exactly one current highlight', () => {
  const p = page('#q21');
  assert.ok(p.targets.get('q21')!.hasAttribute('data-fragment-target'));
  p.location.hash = '#evidence-q21';
  p.dispatchEvent({type: 'hashchange'});
  assert.equal(p.targets.get('q21')!.hasAttribute('data-fragment-target'), false);
  assert.ok(p.targets.get('evidence-q21')!.hasAttribute('data-fragment-target'));
  p.location.hash = '';
  p.dispatchEvent({type: 'popstate'});
  assert.equal([...p.targets.values()].some(target => target.hasAttribute('data-fragment-target')), false);
});

test('rate-limited history updates still scroll without creating an entry', () => {
  const p = page();
  p.history.replaceState = () => { throw new Error('rate limited'); };
  assert.equal(p.click('#q21'), true);
  assert.equal(p.historyEntries.length, 2);
  assert.equal(p.targets.get('q21')!.scrolls.length, 1);
});
