// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const DEBUG = {
  borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  row: {
    // ...DEBUG,
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type RowProps = {|
  baseline?: boolean,
  bottom?: boolean,
  children?: Node,
  debug?: boolean,
  height?: number,
  left?: boolean,
  right?: boolean,
  shrink?: boolean,
  shrinkHorizontal?: boolean,
  shrinkVertical?: boolean,
  spaceAround?: boolean,
  spaceBetween?: boolean,
  stretch?: boolean,
  style?: StyleSheet.Styles,
  top?: boolean,
  width?: number,
  wrap?: boolean
|}

export class Row extends Component<RowProps> {
  render () {
    const {
      baseline,
      bottom,
      children,
      debug,
      height,
      left,
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
    if (left) justifyContent = { justifyContent: 'flex-start' }
    if (right) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    let alignItems = null
    if (top) alignItems = { alignItems: 'flex-start' }
    if (bottom) alignItems = { alignItems: 'flex-end' }
    if (baseline) alignItems = { alignItems: 'baseline' }

    let flex = null
    if (height) flex = { flex: 0 }
    if (shrink) flex = { flex: -1, alignSelf: 'auto' }
    if (shrinkVertical) flex = { flex: -1 }

    let alignSelf = null
    if (shrinkHorizontal) alignSelf = { alignSelf: 'auto' }
    if (width) alignSelf = { alignSelf: 'auto' }

    let wrapStyle = null
    if (wrap) wrapStyle = { flexWrap: 'wrap' }

    let debugStyle = null
    if (debug) debugStyle = DEBUG

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
        {children}
      </View>
    )
  }
}

export default Row
