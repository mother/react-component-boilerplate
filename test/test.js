import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import MyComponent from '../src/MyComponent.js'

describe('MyComponent', () => {
  it('works', () => {
    let renderer = createRenderer()
    renderer.render(<MyComponent name="Jane" />)
    let actualElement = renderer.getRenderOutput()
    let expectedElement = <h1>Hello, Jane</h1>
    expect(actualElement).toEqualJSX(expectedElement)
  })
})
