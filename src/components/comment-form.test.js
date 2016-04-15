import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
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
				<form className="commentForm" onSubmit={function() {}}>
					<input onChange={function() {}} placeholder="Your name" type="text" value="" />
					<input onChange={function() {}} placeholder="Say something..." type="text" value="" />
					<input type="submit" value="Post" />
				</form>
			);

			expect(actualElement).to.equalJSX(expectedElement);
		});
	});

	describe('form submission', () => {
		it('handles form submit event', () => {
			const submitHandlerSpy = sinon.spy();
			const wrapper = shallowRender(<CommentForm onCommentSubmit={submitHandlerSpy} />);
			const fakeSubmitEvent = {
				preventDefault: function() {}
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

		it('resets component state following form submission', () => {
			const submitHandlerSpy = sinon.spy();
			const wrapper = shallowRender(<CommentForm onCommentSubmit={submitHandlerSpy} />);
			const fakeSubmitEvent = {
				preventDefault: function() {}
			};
			const commentData = {
				author: 'Winnie',
				text: 'my comment'
			};

			wrapper.setState(commentData);

			wrapper.simulate('submit', fakeSubmitEvent);
			expect(wrapper.state('author')).to.be.empty;
			expect(wrapper.state('text')).to.be.empty;
		});
	});

	
});