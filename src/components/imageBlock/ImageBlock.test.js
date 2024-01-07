import React from 'react';
import { shallow } from 'enzyme';
import { ImageBlock } from './imageBlock';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<ImageBlock />', () => {
    it('renders the ImageBlock component with the expected structure', () => {
        // Render the component
        const wrapper = shallow(<ImageBlock />);
    
        // Assertions
        expect(wrapper.find('.intro').exists()).toBe(true);
        expect(wrapper.find('.overlay').exists()).toBe(true);
        expect(wrapper.find('.container').exists()).toBe(true);
        expect(wrapper.find('.row').exists()).toBe(true);
      });
});