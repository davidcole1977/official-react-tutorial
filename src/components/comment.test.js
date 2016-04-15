import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import chai from 'chai';
import equalJSX from 'chai-equal-jsx';

import {Comment, transformMarkdown} from './comment';

chai.use(equalJSX);
const expect = chai.expect;

describe('<Comment />', () => {
	describe('shallow rendering', () => {
		it('renders a comment item', () => {
			const renderer = createRenderer();
			renderer.render(<Comment author="Charlie Brown">This is my comment</Comment>);

			const commentElement = renderer.getRenderOutput();

			const expectedElement = (
	      <div className="comment">
	        <h2 className="commentAuthor">
	          Charlie Brown
	        </h2>
	        <span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
	        <span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
	        <span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
	      </div>
	    );

	    expect(commentElement).to.equalJSX(expectedElement);
		});
	});

	describe('component methods', () => {
		describe('stateful methods', () => {
			describe('#rawMarkup', () => {
				it('returns a dangerousInnerHTMLObject', () => {
					const renderer = createRenderer();
					renderer.render(<Comment author="Charlie Brown">This is my comment</Comment>);
					const instance = renderer._instance._instance;

					const actualMarkup = instance.rawMarkup().__html;
					expect(actualMarkup).to.contain('<p>This is my comment</p>');
				});
			});
		});

		describe('pure methods', () => {
			describe('#transformMarkdown', () => {
				it('returns a dangerousInnerHTMLObject', () => {
					const markdown = 'this is my markdown';
					expect(transformMarkdown(markdown).__html).to.contain('<p>this is my markdown</p>');
				});
			});

			describe('#this.transformMarkdown', () => {
				it('returns a dangerousInnerHTMLObject', () => {
					const markdown = 'this is my markdown';
					expect(Comment.prototype.transformMarkdown(markdown).__html).to.contain('<p>this is my markdown</p>');
				});
			});
		});
	});
});