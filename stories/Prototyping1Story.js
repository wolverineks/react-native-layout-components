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

export const Layout = Col
export const Spacer = Col

export type Props = {||}
export type State = {| items: Array<string | number> |}
export class Prototyping1Story extends React.Component<Props, State> {
  state = {
    items: []
  }

  render () {
    return (
      <Layout debug padding={24}>
        <Row debug>
          <Row debug top left>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>

          <Row debug top>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>

          <Row debug top right>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>
        </Row>

        <Spacer height={10} />

        <Row debug>
          <Row debug left>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>

          <Row debug>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>

          <Row debug right>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>
        </Row>

        <Spacer height={10} />

        <Row debug>
          <Row debug bottom left>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>

          <Row debug bottom>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>

          <Row debug bottom right>
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
            <Col debug height={10} width={10} />
          </Row>
        </Row>

        <Spacer height={10} />

        <Row debug spaceBetween>
          <Col debug height={10} width={10} />
          <Col debug height={10} width={10} />
          <Col debug height={10} width={10} />
        </Row>

        <Spacer height={10} />

        <Row debug spaceAround>
          <Col debug height={10} width={10} />
          <Col debug height={10} width={10} />
          <Col debug height={10} width={10} />
        </Row>

        <Spacer height={10} />

        <Row debug spaceEvenly>
          <Col debug height={10} width={10} />
          <Col debug height={10} width={10} />
          <Col debug height={10} width={10} />
        </Row>
      </Layout>
    )
  }
}
