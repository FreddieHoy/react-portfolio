import { shallow } from 'enzyme';
import React from 'react';

import { AboutTag } from '../AboutTag';

describe('AboutTag', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutTag />);
    expect(wrapper).toMatchSnapshot();
  });
});
