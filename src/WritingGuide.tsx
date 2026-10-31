import React from 'react';
import {sections} from './model';
import {writingTemplates,writingTemplateMarkdown,writingTemplateUrl} from './writingTemplates';

export default function WritingGuide() {
  return <section id="start-writing" className="writing-guide" aria-labelledby="writing-guide-title">
    <h2 id="writing-guide-title" className="manage-subtitle">开始写作</h2>
    <p>按这次要整理的内容选择模板。先在编辑器中改成独有的文件名、填写标题与正文，再提交；点击入口本身不会发布。</p>
    <div className="upload-collections">{writingTemplates.map(template=><section className="margin-note" key={template.id}>
      <h3>{template.label}</h3>
      <p>{template.description}</p>
      <div className="actions">
        <a className="button" href={writingTemplateUrl(template)} target="_blank" rel="noopener">新建{template.label}</a>
        <a className="text-link" href={`/${template.section}/`}>查看{sections[template.section]}</a>
      </div>
      <details className="writing-template"><summary>查看与复制模板</summary>
        <pre tabIndex={0} aria-label={`${template.label} Markdown 模板`}><code>{writingTemplateMarkdown(template)}</code></pre>
      </details>
    </section>)}</div>
    <p className="field-hint">题目与解答可先写在同一篇；拆成两篇时互相链接。附件已上传后，可在文章开头添加 attachment 字段关联原文件。</p>
  </section>;
}
