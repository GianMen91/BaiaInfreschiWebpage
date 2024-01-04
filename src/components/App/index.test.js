import React from 'react';
import { shallow } from 'enzyme'; 
import App from './index';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme with the adapter
Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // Add more test cases as needed
});
