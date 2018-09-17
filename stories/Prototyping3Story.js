// @flow

import React, { type Node } from 'react'
import {
  Alert,
  Animated,
  LayoutAnimation,
  NativeModules,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

export const Layout = Row
export const Spacer = Col

export type Props = {||}
export type State = {| items: Array<string | number> |}
export class Prototyping3Story extends React.Component<Props, State> {
  state = {
    items: []
  }

  render () {
    return (
      <Col debug padding={54}>
        <Row height={50} debug />
        <Row height={50} debug />
        <Row height={50} debug />
      </Col>
    )
  }
}
