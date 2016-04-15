import React from 'react';
import $ from 'jquery';
import {CommentList} from './comment-list';
import {CommentForm} from './comment-form';

export class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

    this.state = {
      data: [
        {
          id: 0, 
          author: 'comments are loading',
          text: 'please be patient...'
        }
      ]
    };
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

	handleCommentSubmit(comment) {
		const comments = this.state.data;
		comment.id = Date.now();
		const newComments = comments.concat([comment]);
		this.setState({data: newComments});

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.setState({data});
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({data: comments});
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
};