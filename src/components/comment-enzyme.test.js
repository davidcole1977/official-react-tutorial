import React from 'react';
import chai from 'chai';
import equalJSX from 'chai-equal-jsx';
import { shallow as shallowRender } from 'enzyme';

import {Comment} from './comment';
import {scenarios} from './comment.fixtures';

chai.use(equalJSX);
const expect = chai.expect;

describe('<Comment />', () => {
	scenarios.forEach((scenario) => {
		it(`renders scenario: ${scenario.name}`, () => {
			const wrapper = shallowRender(scenario.input);
			expect(wrapper.get(0)).to.equalJSX(scenario.output);
		});
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