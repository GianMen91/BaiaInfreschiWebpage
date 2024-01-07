import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('renders the Header component with default state and navigation links', () => {
    // Render the component
    const wrapper = shallow(<Header />);

    // Assertions
    expect(wrapper.find('#menu').exists()).toBe(true);
    expect(wrapper.find('.container').exists()).toBe(true);

    const navbarHeader = wrapper.find('.navbar-header');
    expect(navbarHeader.exists()).toBe(true);

    // Check if the navbar brand is present
    const navbarBrand = navbarHeader.find('.navbar-brand');
    expect(navbarBrand.exists()).toBe(true);
    expect(navbarBrand.text()).toEqual('Baiainfreschi.it');

    // Check if the navigation links are present
    const navLinks = wrapper.find('.nav.navbar-nav.navbar-right');
    expect(navLinks.exists()).toBe(true);

    const descriptionLink = navLinks.find('a').at(0);
    expect(descriptionLink.exists()).toBe(true);
    expect(descriptionLink.prop('href')).toEqual('#description');
    expect(descriptionLink.text()).toEqual('DESCRIZIONE');

    const infosectionLink = navLinks.find('a').at(1);
    expect(infosectionLink.exists()).toBe(true);
    expect(infosectionLink.prop('href')).toEqual('#infosection');
    expect(infosectionLink.text()).toEqual('COME ARRIVARE ALLA BAIA DA SALERNO');
  });

  /*it('updates the navbar style on scroll', () => {
    // Mock window scroll event
    global.window.scrollY = 100;

    // Render the component
    const wrapper = shallow(<Header />);

    // Check if the navbar style is updated based on scroll
    const navbar = wrapper.find('#menu');
    expect(navbar.hasClass('navbar-default')).toBe(false);
    expect(navbar.hasClass('navbar-default-transparent')).toBe(true);
  });*/
});