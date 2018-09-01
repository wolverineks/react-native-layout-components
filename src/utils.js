// @flow

import React, { type Node } from 'react'

import Row from './Row.js'
import Col from './Col.js'

export type FlexDirection = 'row' | 'column'

export const isLayoutComponent = (component: mixed) => {
  return (
    component &&
    component.type &&
    (component.type === Row || component.type === Col)
  )
}

export const withDirection = (
  parentFlexDirection: FlexDirection,
  children: Node
) => {
  return React.Children.map(children, child => {
    return isLayoutComponent(child)
      ? React.cloneElement(child, { parentFlexDirection })
      : child
  })
}
