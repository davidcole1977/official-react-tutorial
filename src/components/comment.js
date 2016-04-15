import React from 'react';
import marked from 'marked';

export function transformMarkdown(markdown) {
  const rawMarkup = marked(markdown, {sanitize: true});
  return { __html: rawMarkup };
}

export function Comment(props) {
  const {children, author} = props;

  return (
    <div className="comment">
      <h2 className="commentAuthor">
        {author}
      </h2>
      <span dangerouslySetInnerHTML={transformMarkdown(children.toString())} />
    </div>
  );
}