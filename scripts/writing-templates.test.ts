import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {loadEntries} from '../src/content';
import {writingTemplates,writingTemplateMarkdown,writingTemplateUrl} from '../src/writingTemplates';
import WritingGuide from '../src/WritingGuide';
import config from '../site.config.json';

test('editor links deliver complete UTF-8 templates to the intended repository and collection',()=>{
  for(const template of writingTemplates){
    const url=new URL(writingTemplateUrl(template));
    assert.equal(url.origin,'https://github.com');
    assert.equal(url.pathname,`/${config.repository}/new/main/content/${template.section}`);
    assert.equal(url.searchParams.get('filename'),`${template.id}.md`);
    assert.equal(url.searchParams.get('value'),writingTemplateMarkdown(template));
    assert.equal(url.hash,'');
  }
});

test('all five scaffolds import through the real content loader with separate problem and solution tags',async()=>{
  const temp=await mkdtemp(path.join(os.tmpdir(),'writing-templates-'));
  const root=path.join(temp,'content');
  try{
    for(const template of writingTemplates){
      await mkdir(path.join(root,template.section),{recursive:true});
      await writeFile(path.join(root,template.section,template.id+'.md'),writingTemplateMarkdown(template).replace('填写标题',template.label+'测试'));
    }
    const entries=await loadEntries(root);
    assert.equal(entries.length,5);
    assert.deepEqual(entries.map(e=>e.section).sort(),['books','essays','notes','problems','problems']);
    for(const template of writingTemplates){
      const entry=entries.find(e=>e.sourcePath===`${template.section}/${template.id}.md`)!;
      assert.equal(entry.body.trim(),template.body.trim());
      assert.deepEqual(JSON.parse(entry.tags),[template.label]);
      assert.equal(entry.attachmentPath,null);
    }
  }finally{await rm(temp,{recursive:true,force:true});}
});

test('the writing guide works without JavaScript and exposes selectable templates, not a submit action',()=>{
  const html=renderToStaticMarkup(createElement(WritingGuide));
  assert.equal((html.match(/<details /g)||[]).length,5);
  assert.equal((html.match(/<pre tabindex="0"/g)||[]).length,5);
  assert.equal((html.match(/target="_blank" rel="noopener"/g)||[]).length,5);
  assert.doesNotMatch(html,/<form|<script|type="submit"/);
  assert.match(html,/点击入口本身不会发布/);
});
