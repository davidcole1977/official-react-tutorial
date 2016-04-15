import React from 'react';
import {Comment} from './comment';

export const scenarios = [
	{
		name: 'scenario 1',

		input: (
			<Comment author="Charlie Brown">This is my comment</Comment>
		),

		output: (
			<div className="comment">
				<h2 className="commentAuthor">
					Charlie Brown
				</h2>
				<span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
			</div>
		)
	},
	{
		name: 'scenario 2',

		input: (
			<Comment author="Thomas the Tank Engine">I am a puffy train</Comment>
		),

		output: (
			<div className="comment">
				<h2 className="commentAuthor">
					Thomas the Tank Engine
				</h2>
				<span dangerouslySetInnerHTML={{__html: '<p>I am a puffy train</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>I am a puffy train</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>I am a puffy train</p>\n'}} />
			</div>
		)
	},
	{
		name: 'scenario 3',

		input: (
			<Comment author="David">React makes a lot more sense than Angular so far</Comment>
		),

		output: (
			<div className="comment">
				<h2 className="commentAuthor">
					David
				</h2>
				<span dangerouslySetInnerHTML={{__html: '<p>React makes a lot more sense than Angular so far</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>React makes a lot more sense than Angular so far</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>React makes a lot more sense than Angular so far</p>\n'}} />
			</div>
		)
	}
];