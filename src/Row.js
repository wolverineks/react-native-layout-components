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

    let justifyContent = null
    let alignItems = null
    let flex = null
    let alignSelf = null
    let wrapStyle = null
    let debugStyle = null

    if (left) justifyContent = { justifyContent: 'flex-start' }
    if (right) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    if (top) alignItems = { alignItems: 'flex-start' }
    if (bottom) alignItems = { alignItems: 'flex-end' }
    if (baseline) alignItems = { alignItems: 'baseline' }

    if (height) flex = { flex: 0 }
    if (width) alignSelf = { alignSelf: 'auto' }
    if (shrink) flex = { flex: -1 }
    if (shrink) alignSelf = { alignSelf: 'auto' }

    if (shrinkVertical) {
      if (parentFlexDirection === 'column') flex = { flex: -1 }
      if (parentFlexDirection === 'row') alignSelf = { alignSelf: 'auto' }
      if (!parentFlexDirection) console.warn('Missing parentFlexDirection')
    }

    if (shrinkHorizontal) {
      if (parentFlexDirection === 'column') alignSelf = { alignSelf: 'auto' }
      if (parentFlexDirection === 'row') flex = { flex: -1 }
      if (!parentFlexDirection) console.warn('Missing parentFlexDirection')
    }

    if (wrap) wrapStyle = { flexWrap: 'wrap' }
    if (debug) debugStyle = DEBUG

    const childrenWithDirection = withDirection('row', children)

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
          wrapStyle
        ]}
        height={height}
        width={width}
        {...props}
      >
        {childrenWithDirection}
      </View>
    )
  }
}

export default Row
