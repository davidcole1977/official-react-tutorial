import React from 'react';
import chai from 'chai';
import equalJSX from 'chai-equal-jsx';
import { shallow as shallowRender } from 'enzyme';

import {CommentList} from './comment-list';
import {Comment} from './comment';

chai.use(equalJSX);
const expect = chai.expect;

describe('<CommentList />', () => {
	it('renders a comment list', () => {
    const data = [
      {
        author: 'author name',
        id: 123,
        text: 'this is a comment'
      },
      {
        author: 'another author',
        id: 456,
        text: 'bar'
      },
      {
        author: 'another author name',
        id: 789,
        text: 'another comment'
      }
    ];

    const expectedElement = (
      <div className="commentList">
        <Comment author="author name">
          this is a comment
        </Comment>
        <Comment author="another author">
          bar
        </Comment>
        <Comment author="another author name">
          another comment
        </Comment>
      </div>
    );

    const wrapper = shallowRender(<CommentList data={data} />);
    const renderedElement = wrapper.get(0);

    expect(renderedElement).to.equalJSX(expectedElement);
	});
});