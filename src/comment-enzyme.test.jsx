import React from 'react';
import chai from 'chai';
import equalJSX from 'chai-equal-jsx';
import { shallow as shallowRender } from 'enzyme';

import {Comment, transformMarkdown} from './comment';

chai.use(equalJSX);
const expect = chai.expect;

describe('<Comment />', () => {
	it('renders a comment', () => {
		const wrapper = shallowRender(<Comment author="Charlie Brown">This is my comment</Comment>);
		const expectedNode = (
			<div className="comment">
				<h2 className="commentAuthor">
					Charlie Brown
				</h2>
				<span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
				<span dangerouslySetInnerHTML={{__html: '<p>This is my comment</p>\n'}} />
			</div>
		);

		expect(wrapper.get(0)).to.equalJSX(expectedNode);
		expect(wrapper.equals(expectedNode)).to.be.true;
	});

	it('contains an author', () => {
		const wrapper = shallowRender(<Comment author="Charlie Brown">This is my comment</Comment>);
		const expectedNode = (
			<h2 className="commentAuthor">
				Charlie Brown
			</h2>
		);

		expect(wrapper.contains(expectedNode)).to.be.true;
	});
});