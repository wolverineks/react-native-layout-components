// @flow

import React, { type Node } from 'react'

export type FlexDirection = 'row' | 'column'

export const withParentFlexDirection = (
  parentFlexDirection: FlexDirection,
  children: Node
) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, { parentFlexDirection })
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
