import React from 'react'
import App from './app'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('App Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true)
  })
})
