import React from 'react'
import App from './app'
import './app.css'

export default {
  title: 'App',
  component: App,
  argTypes: {
    landingPageData: { control: 'object' }
  }
}

// Story for the default state of the component WIP
export const Default = (args) => <App {...args} />
Default.args = {}
