// @flow
/* globals jest describe it expect */

import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import App from './App'

describe('App', () => {
  it('should render', () => {
    const renderer = new ShallowRenderer()
    const props = {}
    const actual = renderer.render(<App {...props} />)

    expect(actual).toMatchSnapshot()
  })
})