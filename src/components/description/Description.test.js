import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { Description } from './description'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<Description />', () => {
  it('renders the Description component with loading text when data prop is not provided', () => {
    // Render the component without data prop
    const wrapper = shallow(<Description />)

    // Assertions
    expect(wrapper.find('#description').exists()).toBe(true)
    expect(wrapper.find('.container').exists()).toBe(true)
    expect(wrapper.find('.row').exists()).toBe(true)
    expect(wrapper.find('.description-text').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toEqual('Descrizione')
    expect(wrapper.find('p').text()).toEqual('loading...')
  })

  it('renders the Description component with correct paragraph when data prop is provided', () => {
    // Mock data
    const mockProps = {
      data: {
        paragraph: 'Test Description Paragraph'
      }
    }

    // Render the component with mock data
    const wrapper = shallow(<Description {...mockProps} />)

    // Assertions
    expect(wrapper.find('p').text()).toEqual('Test Description Paragraph')
  })

  it('renders the Google Maps iframe with correct attributes', () => {
    // Mock data with Google Maps iframe
    const mockProps = {
      data: {
        paragraph: 'Test Description Paragraph'
      }
    }

    // Render the component with mock data
    const wrapper = shallow(<Description {...mockProps} />)

    // Assertions
    const iframeElement = wrapper.find('iframe')
    expect(iframeElement.exists()).toBe(true)
    expect(iframeElement.prop('src')).toEqual(expect.stringContaining('google.com/maps'))
    expect(iframeElement.prop('width')).toEqual('100%')
    expect(iframeElement.prop('height')).toEqual('350')
  })
})
