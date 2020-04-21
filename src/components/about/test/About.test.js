import { shallow } from 'enzyme';
import React from 'react';

import { About } from '../About';

describe('About', () => {
  it('render the correct fields', () => {
    const wrapper = shallow(<About />);

    expect(wrapper).toMatchSnapshot();
  });
});
