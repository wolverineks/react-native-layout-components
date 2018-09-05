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

export const displayMissingParentFlexDirectionWarning = (
  properties: Array<string>
) => {
  const warning = `Missing parentFlexDirection: Using [${properties.join(
    ', '
  )}] on layout components outside of another layout component may lead to unexpected behavior. To fix this, wrap the component(s) using these properties with another layout component that does not use any of these properties, or manually specify the parentFlexDirection in the component props.`
  console.warn(warning)
}
