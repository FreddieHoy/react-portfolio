import { shallow } from 'enzyme';
import React from 'react';

import {
  AboutContentContact,
  AboutContentInterests,
  AboutContentMain
} from '../AboutContent';

describe('AboutContentMain', () => {
  it('render the correct fields', () => {
    const wrapper = shallow(<AboutContentMain />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('AboutContentContact', () => {
  it('render the correct fields', () => {
    const wrapper = shallow(<AboutContentContact />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('AboutContentInterests', () => {
  it('render the correct fields', () => {
    const wrapper = shallow(<AboutContentInterests />);

    expect(wrapper).toMatchSnapshot();
  });
});
