import React from 'react';
import marked from 'marked';

export function transformMarkdown(markdown) {
  var rawMarkup = marked(markdown, {sanitize: true});
  return { __html: rawMarkup };
}

export const Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  transformMarkdown,

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <span dangerouslySetInnerHTML={this.transformMarkdown(this.props.children.toString())} />
        <span dangerouslySetInnerHTML={transformMarkdown(this.props.children.toString())} />
      </div>
    );
  }
});