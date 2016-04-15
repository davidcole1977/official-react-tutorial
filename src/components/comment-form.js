import React from 'react';

export function CommentForm(props) {
	const {onCommentSubmit} = props;

	function handleSubmit(e) {
		e.preventDefault();

		const author = e.target.querySelector('#comment-form__author').value.trim();
		const text = e.target.querySelector('#comment-form__text').value.trim();

		if (!text || !author) {
			return;
		}

		onCommentSubmit({
			author,
			text
		});
	}

	return (
		<form className="commentForm" id="comment-form" onSubmit={handleSubmit}>
			<input type="text" placeholder="Your name" id="comment-form__author" />
			<input type="text" placeholder="Say something..." id="comment-form__text" />
			<input type="submit" value="Post" />
		</form>
	);
}
