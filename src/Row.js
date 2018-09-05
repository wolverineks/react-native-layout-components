// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

import { withDirection } from './utils.js'

const DEBUG = {
  borderColor: 'red',
  borderWidth: 1
}

export const rawStyles = {
  row: {
    // ...DEBUG,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type Props = {|
  baseline?: boolean,
  bottom?: boolean,
  children?: Node,
  debug?: boolean,
  height?: number | string,
  left?: boolean,
  maxHeight?: number | string,
  maxWidth?: number | string,
  minHeight?: number | string,
  minWidth?: number | string,
  padding?: number | string,
  paddingBottom?: number | string,
  paddingHorizontal?: number | string,
  paddingLeft?: number | string,
  paddingRight?: number | string,
  paddingTop?: number | string,
  paddingVertical?: number | string,
  parentFlexDirection?: 'row' | 'column',
  right?: boolean,
  shrink?: boolean,
  shrinkHorizontal?: boolean,
  shrinkVertical?: boolean,
  spaceAround?: boolean,
  spaceBetween?: boolean,
  stretch?: boolean,
  style?: StyleSheet.Styles,
  target?: boolean,
  top?: boolean,
  width?: number | string,
  wrap?: boolean
|}

export class Row extends Component<Props> {
  missingParentFlexDirection = false

  static defaultProps = {
    baseline: false,
    bottom: false,
    debug: false,
    left: false,
    right: false,
    shrink: false,
    shrinkHorizontal: false,
    shrinkVertical: false,
    spaceAround: false,
    spaceBetween: false,
    stretch: false,
    target: false,
    top: false,
    wrap: false
  }

  render () {
    const {
      baseline,
      bottom,
      children,
      debug,
      height,
      left,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      parentFlexDirection,
      right,
      shrink,
      shrinkHorizontal,
      shrinkVertical,
      spaceAround,
      spaceBetween,
      stretch,
      style,
      target,
      top,
      width,
      wrap,
      ...props
    } = this.props

    const wrapStyle = wrap && { flexWrap: 'wrap' }
    const debugStyle = debug && DEBUG
    const heightStyle = height && { height }
    const widthStyle = width && { width }
    const maxHeightStyle = maxHeight && { maxHeight }
    const maxWidthStyle = maxWidth && { maxWidth }

    let justifyContent = null
    let alignItems = null
    let flex = null
    let alignSelf = null

    if (left) justifyContent = { justifyContent: 'flex-start' }
    if (right) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    if (top) alignItems = { alignItems: 'flex-start' }
    if (bottom) alignItems = { alignItems: 'flex-end' }
    if (baseline) alignItems = { alignItems: 'baseline' }

    if (width) {
      if (parentFlexDirection === 'column') alignSelf = { alignSelf: 'auto' }
      if (parentFlexDirection === 'row') flex = { flex: -1 }
      if (!parentFlexDirection) this.missingParentFlexDirection = true
    }
    if (height) {
      flex = { flex: -1 }
      // if (parentFlexDirection === 'column') flex = { flex: -1 }
      if (parentFlexDirection === 'row') alignSelf = { alignSelf: 'auto' }
      if (!parentFlexDirection) this.missingParentFlexDirection = true
    }

    if (maxWidth) {
      if (parentFlexDirection === 'column') alignSelf = { alignSelf: 'auto' }
      // if (parentFlexDirection === 'row') flex = { flex: -1 }
      if (!parentFlexDirection) this.missingParentFlexDirection = true
    }
    if (maxHeight) {
      // if (parentFlexDirection === 'column') flex = { flex: -1 }
      if (parentFlexDirection === 'row') alignSelf = { alignSelf: 'auto' }
      if (!parentFlexDirection) this.missingParentFlexDirection = true
    }

    if (shrink) flex = { flex: -1 }
    if (shrink) alignSelf = { alignSelf: 'auto' }

    if (shrinkVertical) {
      if (parentFlexDirection === 'column') flex = { flex: -1 }
      if (parentFlexDirection === 'row') alignSelf = { alignSelf: 'auto' }
      if (!parentFlexDirection) this.missingParentFlexDirection = true
    }

    if (shrinkHorizontal) {
      if (parentFlexDirection === 'column') alignSelf = { alignSelf: 'auto' }
      if (parentFlexDirection === 'row') flex = { flex: -1 }
      if (!parentFlexDirection) this.missingParentFlexDirection = true
    }

    const childrenWithDirection = withDirection('row', children)

    if (this.missingParentFlexDirection) {
      console.warn('Missing parentFlexDirection')
    }
    return (
      <View
        style={[
          styles.row,
          style,
          alignItems,
          alignSelf,
          debugStyle,
          flex,
          justifyContent,
          wrapStyle,
          heightStyle,
          widthStyle,
          maxHeightStyle,
          maxWidthStyle
        ]}
        {...props}
      >
        {childrenWithDirection}
      </View>
    )
  }
}

export default Row
