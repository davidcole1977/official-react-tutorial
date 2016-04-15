import React from 'react';
import chai from 'chai';
import equalJSX from 'chai-equal-jsx';
import { shallow as shallowRender } from 'enzyme';

import {Comment, transformMarkdown} from './comment';

chai.use(equalJSX);
const expect = chai.expect;

describe('<Comment />', () => {
	describe('shallow rendering', () => {
		const wrapper = shallowRender(<Comment author="Charlie Brown">This is my comment</Comment>);
		const expectedElement = (
			<div className="comment">
				<h2 className="commentAuthor">
					Charlie Brown
				</h2>
				<span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
			</div>
		);
		const renderedElement = wrapper.get(0);

		it('renders a comment item', () => {
			expect(renderedElement).to.equalJSX(expectedElement);
		});

		it('contains an author', () => {
			const expecteAuthordNode = (
				<h2 className="commentAuthor">
					Charlie Brown
				</h2>
			);

			expect(wrapper.contains(expecteAuthordNode)).to.be.true;
		});

	});

	describe('component methods', () => {
		describe('#transformMarkdown', () => {
			it('returns a dangerousInnerHTMLObject', () => {
				const markdown = 'this is my markdown';
				expect(transformMarkdown(markdown).__html).to.contain('<p>this is my markdown</p>');
			});
		});
	});
});