import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/link-selection.js', import.meta.url), 'utf8');

function page(saved?: string) {
  const listeners = new Map<string, ((event: any) => void)[]>();
  const storage = new Map(saved ? [['math-notes:pending-link', saved]] : []);
  const location = new URL('https://example.org/math-notes/math/');
  class Element {
    attributes = new Map<string, string>();
    style: Record<string, string> = {};
    className = '';
    nodeType = 1;
    childNodes: any[] = [];
    parentElement: Element | null = null;
    hidden = false;
    isConnected = true;
    offsetWidth = 100;
    href = '';
    target = '';
    textContent = '';
    rect = {left: 20, top: 30, width: 80, height: 44};
    closest() { return this.href ? this : null; }
    setAttribute(name: string, value: string) { this.attributes.set(name, value); }
    removeAttribute(name: string) { this.attributes.delete(name); }
    hasAttribute(name: string) { return this.attributes.has(name); }
    getBoundingClientRect(): any {
      const parent = this.parentElement?.getBoundingClientRect();
      const left = parent ? parent.left + parseFloat(this.style.left || '0') : this.rect.left;
      const top = parent ? parent.top + parseFloat(this.style.top || '0') : this.rect.top;
      const width = parent ? parseFloat(this.style.width || '0') : this.rect.width;
      const height = parent ? parseFloat(this.style.height || '0') : this.rect.height;
      return {left, top, width, height, right: left + width, bottom: top + height};
    }
    matches() { return false; }
    append(element: Element) { this.childNodes.push(element); element.parentElement = this; }
    remove() {
      if (this.parentElement) this.parentElement.childNodes = this.parentElement.childNodes.filter(node => node !== this);
      this.parentElement = null;
    }
  }
  const first = Object.assign(new Element(), {href: location.href, textContent: '数学'});
  const second = Object.assign(new Element(), {href: location.href + '#proof', textContent: '证明'});
  for (const link of [first, second]) link.childNodes.push({
    nodeType: 3, textContent: link.textContent, parentElement: link,
  });
  const blank = new Element();
  const children: Element[] = [];
  const on = (name: string, callback: (event: any) => void) => {
    listeners.set(name, [...listeners.get(name) ?? [], callback]);
  };
  const document = {
    activeElement: blank,
    createElement: () => { const element = new Element(); children.push(element); return element; },
    createRange: () => {
      let node: any;
      return {
        setStart(value: any) { node = value; }, setEnd() {},
        getClientRects() {
          const box = node.parentElement.getBoundingClientRect();
          return [{left: box.left + 8, top: box.top + 12, right: box.left + 40,
            bottom: box.top + 32, width: 32, height: 20}];
        },
      };
    },

    documentElement: {classList: new Set()},
    querySelectorAll: () => [first, second],
    addEventListener: on,
  };
  let scheduled: (() => void) | undefined;
  vm.runInNewContext(source, {
    document, location, URL, window: {},
    getComputedStyle: () => ({position: 'static', display: 'inline', visibility: 'visible'}),
    ResizeObserver: class {observe() {} disconnect() {}},
    addEventListener: on,
    requestAnimationFrame: (callback: () => void) => { scheduled = callback; return 1; },
    queueMicrotask,
    sessionStorage: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => storage.set(key, value),
      removeItem: (key: string) => storage.delete(key),
    },
  });
  function fire(name: string, target = blank, extra = {}) {
    document.activeElement = target;
    // Link feedback must never intercept navigation or change browser history.
    const event = {target, button: 0, ...extra, preventDefault() { assert.fail('native action intercepted'); }};
    listeners.get(name)?.forEach(callback => callback(event));
  }
  return {first, second, blank, ring: children[0], children, storage, fire,
    flush() { const callback = scheduled; scheduled = undefined; callback?.(); }};
}

test('mouse and touch select one link, preserve native actions, and clear on blank clicks or cancelled gestures', () => {
  const p = page();
  assert.equal(p.children.length, 1);
  assert.ok(p.ring.hidden);
  for (const pointerType of ['mouse', 'touch']) {
    p.fire('pointerdown', p.first, {pointerType});
    p.fire('click', p.first);
    assert.ok(p.first.hasAttribute('data-link-selected'));
    p.fire('pointerdown', p.second, {pointerType});
    assert.ok(!p.first.hasAttribute('data-link-selected'));
    assert.equal(p.first.childNodes.length, 1, 'old link contains only its original content');
    assert.ok(p.second.hasAttribute('data-link-selected'));
    p.fire('click');
    assert.ok(p.ring.hidden);
    assert.ok(!p.second.hasAttribute('data-link-selected'));
  }
  p.fire('pointerdown', p.first);
  p.fire('pointercancel', p.first);
  assert.ok(p.ring.hidden);
});

test('Tab follows focus and the content-sized frame scrolls with its own link without a scroll handler', () => {
  const p = page();
  p.fire('keydown', p.blank, {key: 'Tab'});
  p.fire('focusin', p.first);
  assert.ok(!p.ring.hidden);
  p.fire('keydown', p.first, {key: 'Tab', shiftKey: true});
  p.fire('focusin', p.second);
  assert.ok(!p.first.hasAttribute('data-link-selected'));
  p.fire('focusin');
  assert.ok(p.ring.hidden);
  p.fire('keydown', p.blank, {key: 'Tab'});
  p.fire('focusin', p.second);
  p.fire('click', p.second); // Enter activates a fragment link.
  p.fire('focusin');
  assert.ok(p.second.hasAttribute('data-link-selected'));
  p.fire('pointerdown', p.first);
  p.fire('focusin'); // Existing fragment navigation can focus a heading.
  assert.ok(p.first.hasAttribute('data-link-selected'));
  assert.equal(p.ring.parentElement, p.first);
  assert.equal(p.ring.style.left, '4px');
  assert.equal(p.ring.style.width, '40px', 'frame fits the 32px text, not the 80px hit area');
  assert.equal(p.ring.style.height, '28px');
  const originalTop = p.ring.getBoundingClientRect().top;
  p.first.rect.top = -10;
  p.fire('scroll'); p.flush();
  assert.equal(p.ring.style.top, '8px', 'link-relative position stays fixed');
  assert.equal(p.ring.getBoundingClientRect().top, originalTop - 40, 'scrolling the parent carries the frame');
  assert.deepEqual(p.first.rect, {left: 20, top: -10, width: 80, height: 44});
  p.first.isConnected = false;
  p.fire('resize'); p.flush();
  assert.ok(p.ring.hidden);
});

test('navigation continuity restores only the exact clicked link and tolerates invalid saved state', () => {
  const p = page(JSON.stringify({destination: 'https://example.org/math-notes/math/', text: '数学'}));
  assert.ok(p.first.hasAttribute('data-link-selected'));
  assert.equal(p.storage.size, 0);
  const other = page(JSON.stringify({destination: 'https://example.org/math-notes/english/', text: '英语'}));
  assert.ok(other.ring.hidden);
  const malformed = page('invalid JSON');
  malformed.fire('click', malformed.first, {ctrlKey: true});
  assert.ok(malformed.first.hasAttribute('data-link-selected'));
  const filtered = page();
  filtered.second.href = 'https://example.org/math-notes/math/?category=notes';
  filtered.fire('click', filtered.second);
  filtered.fire('click');
  assert.equal(filtered.storage.size, 0, 'in-page filters must not restore cancelled selections on reload');
  filtered.second.href = 'https://example.org/math-notes/english/';
  filtered.fire('click', filtered.second);
  assert.equal(JSON.parse(filtered.storage.get('math-notes:pending-link')!).destination, filtered.second.href);
});
