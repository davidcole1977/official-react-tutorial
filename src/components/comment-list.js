import React from 'react';
import {Comment} from './comment';

export function CommentList(props) {
	const {data} = props;

  const commentNodes = data.map(function(comment) {
		return (
			<Comment author={comment.author} key={comment.id}>
				{comment.text}
			</Comment>
		);
	});

	return (
		<div className="commentList">
			{commentNodes}
		</div>
	);
}