import React from 'react'
import { Intro } from './intro'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<ImageBlock />', () => {
  it('renders the ImageBlock component with the expected structure', () => {
    // Render the component
    const wrapper = shallow(<Intro />)
    // Assertions
    expect(wrapper.find('.intro').exists()).toBe(true)
    expect(wrapper.find('.overlay').exists()).toBe(true)
    expect(wrapper.find('.container').exists()).toBe(true)
    expect(wrapper.find('.row').exists()).toBe(true)
  })
})
