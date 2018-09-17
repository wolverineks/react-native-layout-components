// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

import {
  displayMissingParentFlexDirectionWarning,
  withParentFlexDirection
} from './utils.js'

const DEBUG = {
  borderColor: 'red',
  borderWidth: 1
}

export const rawStyles = {
  row: {
    // ...DEBUG,
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type Props = {|
  baseline?: boolean,
  bottom?: boolean,
  children?: Node,
  debug?: boolean,
  dontPassProps?: boolean,
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
  spaceEvenly?: boolean,
  stretch?: boolean,
  style?: StyleSheet.Styles,
  target?: boolean,
  top?: boolean,
  width?: number | string,
  wrap?: boolean
|}

export class Row extends Component<Props> {
  missingParentFlexDirection = false
  requestedProperties = {}

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
      dontPassProps,
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
      spaceEvenly,
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

    let heightStyle = null
    let widthStyle = null
    let maxHeightStyle = null
    let maxWidthStyle = null
    let alignItemsStyle = null
    const alignSelfStyle = null
    let flexStyle = null
    let justifyContentStyle = null

    if (top) alignItemsStyle = { alignItems: 'flex-start' }
    if (bottom) alignItemsStyle = { alignItems: 'flex-end' }
    if (left) justifyContentStyle = { justifyContent: 'flex-start' }
    if (right) justifyContentStyle = { justifyContent: 'flex-end' }

    if (baseline) alignItemsStyle = { alignItems: 'baseline' }
    if (spaceAround) justifyContentStyle = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContentStyle = { justifyContent: 'space-between' }
    if (spaceEvenly) justifyContentStyle = { justifyContent: 'space-evenly' }

    if (height != null) {
      heightStyle = { height }
      if (parentFlexDirection === 'column') {
        flexStyle = { flex: -1 }
      }
    }
    if (width != null) {
      widthStyle = { width }
      if (parentFlexDirection === 'row') {
        flexStyle = { flex: -1 }
      }
    }

    if (maxHeight != null) {
      maxHeightStyle = { maxHeight }
    }
    if (maxWidth != null) {
      maxWidthStyle = { maxWidth }
    }

    if (shrink || shrinkVertical) {
      heightStyle = { height: null }
    }
    if (shrink || shrinkHorizontal) {
      widthStyle = { width: null }
    }

    if (this.missingParentFlexDirection) {
      displayMissingParentFlexDirectionWarning(
        Object.keys(this.requestedProperties)
      )
    }

    return (
      <View
        style={[
          styles.row,
          style,
          alignItemsStyle,
          alignSelfStyle,
          debugStyle,
          flexStyle,
          justifyContentStyle,
          wrapStyle,
          heightStyle,
          widthStyle,
          maxHeightStyle,
          maxWidthStyle
        ]}
        {...props}
      >
        {dontPassProps ? children : withParentFlexDirection('row', children)}
      </View>
    )
  }

  logMissingParentFlexDirection = (property: string) => {
    this.missingParentFlexDirection = true
    this.requestedProperties = { ...this.requestedProperties, [property]: true }
  }
}

export default Row
