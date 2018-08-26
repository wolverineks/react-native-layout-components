// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const DEBUG = {
  borderColor: 'red',
  borderWidth: 1
}

export const rawStyles = {
  column: {
    // ...DEBUG,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
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
  top?: boolean,
  width?: number | string,
  wrap?: boolean
|}

export class Col extends Component<Props> {
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
      top,
      width,
      wrap,
      ...props
    } = this.props

    let justifyContent = null
    let alignItems = null
    let flex = null
    let alignSelf = null

    if (parentFlexDirection === 'row') {
      if (left) justifyContent = { justifyContent: 'flex-start' }
      if (right) justifyContent = { justifyContent: 'flex-end' }
      if (spaceAround) justifyContent = { justifyContent: 'space-around' }
      if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

      if (top) alignItems = { alignItems: 'flex-start' }
      if (bottom) alignItems = { alignItems: 'flex-end' }
      if (baseline) alignItems = { alignItems: 'baseline' }

      if (width) flex = { flex: 0 }
      if (shrink) flex = { flex: -1, alignSelf: 'auto' }
      if (shrinkHorizontal) flex = { flex: -1 }

      if (shrinkVertical) alignSelf = { alignSelf: 'auto' }
      if (height) alignSelf = { alignSelf: 'auto' }
    }

    if (parentFlexDirection === 'column') {
      if (top) justifyContent = { justifyContent: 'flex-start' }
      if (bottom) justifyContent = { justifyContent: 'flex-end' }
      if (spaceAround) justifyContent = { justifyContent: 'space-around' }
      if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

      if (left) alignItems = { alignItems: 'flex-start' }
      if (right) alignItems = { alignItems: 'flex-end' }
      if (baseline) alignItems = { alignItems: 'baseline' }

      if (width) flex = { flex: 0 }
      if (shrink) flex = { flex: -1, alignSelf: 'auto' }
      if (shrinkVertical) flex = { flex: -1 }

      if (shrinkHorizontal) alignSelf = { alignSelf: 'auto' }
      if (height) alignSelf = { alignSelf: 'auto' }
    }

    const size = { height, width }

    let wrapStyle = null
    if (wrap) wrapStyle = { flexWrap: 'wrap' }

    let debugStyle = null
    if (debug) debugStyle = DEBUG

    const childrenWithDirection = React.Children.map(children, child =>
      React.cloneElement(child, { parentFlexDirection: 'column' })
    )

    return (
      <View
        style={[
          styles.column,
          style,
          alignItems,
          alignSelf,
          debugStyle,
          flex,
          justifyContent,
          size,
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

export default Col
