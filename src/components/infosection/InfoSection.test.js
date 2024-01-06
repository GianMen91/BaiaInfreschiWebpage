import React from 'react';
import { shallow } from 'enzyme';
import { InfoSection } from './index';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<InfoSection />', () => {
    const mockItems = [
        { icon: 'fa-train', text: 'Lorem ipsum train info' },
        { icon: 'fa-bus', text: 'Lorem ipsum bus info' },
      ];
    
      it('renders InfoSection component with the provided items', () => {
        // Render the component with mock items
        const wrapper = shallow(<Infosection items={mockItems} />);
    
        // Assertions
        expect(wrapper.find('#infosection').exists()).toBe(true);
        expect(wrapper.find('.info-container').length).toBe(mockItems.length);
    
        // Check if the icons and text are rendered correctly
        mockItems.forEach((item, index) => {
          expect(wrapper.find('.info-container').at(index).find(`.fa-${item.icon}`).exists()).toBe(true);
          expect(wrapper.find('.info-container').at(index).find('.infosection-text p').html()).toContain(item.text);
        });
      });
});