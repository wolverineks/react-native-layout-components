// @flow

import React, { type Node } from 'react'
import { StyleSheet, View as RNView } from 'react-native'

import { Row } from './Row.js'
import { Col } from './Col.js'

export type Props = {|
  children?: Node,
  col?: boolean,
  row?: boolean,
  style?: StyleSheet.Styles
|}

export const View = ({ col, row, ...props }: Props) => {
  return col ? (
    <Col {...props} />
  ) : row ? (
    <Row {...props} />
  ) : (
    <RNView {...props} />
  )
}

export default View
