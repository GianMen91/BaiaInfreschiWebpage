import React from 'react'
import { Banner } from './banner'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Banner />', () => {
  it('renders the Banner component with correct title and text', () => {
    const mockProps = {
      title: 'Test Title',
      text: 'Test Text'
    }

    const wrapper = shallow(<Banner {...mockProps} />)

    // Assertions
    expect(wrapper.find('#banner').exists()).toBe(true)
    expect(wrapper.find('.container').exists()).toBe(true)
    expect(wrapper.find('.section-title').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toEqual('Test Title')
    expect(wrapper.find('h3').text()).toEqual('Test Text')
  })
})
