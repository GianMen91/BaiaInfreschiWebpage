import React from 'react';
import { shallow } from 'enzyme';
import { ScrollToTopButton } from './index';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<ScrollToTopButton />', () => {
    it('renders ScrollToTopButton component', () => {
        // Render the component
        const wrapper = shallow(<ScrollToTopButton />);
    
        // Assertions
        expect(wrapper.find('.scroll-to-top-button').exists()).toBe(true);
        expect(wrapper.find('.arrow-icon').exists()).toBe(true);
        expect(wrapper.find('.visible').exists()).toBe(false); // Initially, the button should not be visible
    
        // Simulate scroll to make the button visible
        window.scrollY = 150;
        wrapper.instance().handleScroll();
    
        // Update the wrapper after the state change
        wrapper.update();
    
        // Check if the button is now visible
        expect(wrapper.find('.visible').exists()).toBe(true);
      });
    
      it('scrolls to the top when clicked', () => {
        // Create a spy for the window.scrollTo function
        const scrollToSpy = jest.spyOn(window, 'scrollTo');
    
        // Render the component
        const wrapper = shallow(<ScrollToTopButton />);
    
        // Simulate a click on the button
        wrapper.find('.scroll-to-top-button').simulate('click');
    
        // Assertions
        expect(scrollToSpy).toHaveBeenCalledWith({
          top: 0,
          behavior: 'smooth',
        });
    
        // Clean up the spy
        scrollToSpy.mockRestore();
      });
});