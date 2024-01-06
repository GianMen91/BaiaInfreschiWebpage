import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './index';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('renders the Footer component with correct text and link', () => {
    // Render the component
    const wrapper = shallow(<Footer />);

    // Assertions
    expect(wrapper.find('#footer').exists()).toBe(true);
    expect(wrapper.find('.container.text-center').exists()).toBe(true);

    const paragraphElement = wrapper.find('p');
    expect(paragraphElement.exists()).toBe(true);

    // Check if the text contains the expected content
    expect(paragraphElement.text()).toContain('Baiainfreschi.it – ©Copyright 2019 Giancarlo Mennillo');

    // Check if the email link is present
    const emailLink = paragraphElement.find('a');
    expect(emailLink.exists()).toBe(true);
    expect(emailLink.prop('href')).toEqual('mailto:giancarlo.mennillo@gmail.com');
    expect(emailLink.text()).toEqual(' (giancarlo.mennillo@gmail.com)');
  });
});