import { shallow } from 'enzyme';
import React from 'react';

import { AboutTitle } from '../AboutTitle';

describe('AboutTag', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AboutTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
