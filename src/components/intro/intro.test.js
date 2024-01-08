import React from 'react'
import { Intro } from './intro'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Intro />', () => {
  it('renders the Intro component with the expected structure', () => {
    // Render the component
    const wrapper = shallow(<Intro />)
    // Assertions
    expect(wrapper.find('.intro-container').exists()).toBe(true)
    expect(wrapper.find('.responsive-image').exists()).toBe(true)
  })
})
