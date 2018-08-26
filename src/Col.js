// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const DEBUG = {
  borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  item: {
    // ...DEBUG,
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type ItemProps = {|
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

export class Col extends Component<ItemProps> {
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
      style,
      top,
      width,
      ...props
    } = this.props

    let justifyContent = null
    if (top) justifyContent = { justifyContent: 'flex-start' }
    if (bottom) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    let alignItems = null
    if (left) alignItems = { alignItems: 'flex-start' }
    if (right) alignItems = { alignItems: 'flex-end' }
    if (baseline) alignItems = { alignItems: 'baseline' }

    let flex = null
    if (width) flex = { flex: 0 }
    if (shrink) flex = { flex: -1, alignSelf: 'auto' }
    if (shrinkHorizontal) flex = { flex: -1 }

    let alignSelf = null
    if (shrinkVertical) alignSelf = { alignSelf: 'auto' }
    if (width) alignSelf = { alignSelf: 'auto' }

    let wrap = null
    if (this.props.wrap) wrap = { flexWrap: 'wrap' }

    let debugStyle = null
    if (debug) debugStyle = DEBUG

    return (
      <View
        style={[
          styles.item,
          style,
          alignItems,
          alignSelf,
          debugStyle,
          flex,
          justifyContent,
          wrap
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

export default Col
