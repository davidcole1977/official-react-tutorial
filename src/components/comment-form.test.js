import React from 'react';
import chai from 'chai';
import equalJSX from 'chai-equal-jsx';
import { shallow as shallowRender } from 'enzyme';
import sinon from 'sinon';

import {CommentForm} from './comment-form';

chai.use(equalJSX);
const expect = chai.expect;

describe('<CommentForm />', () => {
	describe('initial render', () => {
		it('renders a comment form', () => {
			const submitHandlerSpy = sinon.spy();
			const wrapper = shallowRender(<CommentForm onCommentSubmit={submitHandlerSpy} />);
			const actualElement = wrapper.get(0);

			const expectedElement = (
				<form className="commentForm" id="comment-form" onSubmit={function() {}}>
					<input type="text" placeholder="Your name" id="comment-form__author" />
					<input type="text" placeholder="Say something..." id="comment-form__text" />
					<input type="submit" value="Post" />
				</form>
			);

			expect(actualElement).to.equalJSX(expectedElement);
		});
	});

	// yep, this needs updating, but not too worried in the context of this exercise...
	describe('form submission', () => {
		it('handles form submit event', () => {
			const submitHandlerSpy = sinon.spy();
			const wrapper = shallowRender(<CommentForm onCommentSubmit={submitHandlerSpy} />);
			const fakeSubmitEvent = {
				preventDefault() {}
			};
			const commentData = {
				author: 'Winnie',
				text: 'my comment'
			};

			wrapper.setState(commentData);

			wrapper.simulate('submit', fakeSubmitEvent);
			expect(submitHandlerSpy.calledOnce).to.be.true;
			expect(submitHandlerSpy.calledWith(commentData)).to.be.true;
		});
	});
});