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
export class Prototyping2Story extends React.Component<Props, State> {
  state = {
    items: []
  }

  render () {
    return (
      <Layout debug padding={24}>
        <Col debug>
          <Col debug top left>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>

          <Col debug top>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>

          <Col debug top right>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>
        </Col>

        <Spacer height={10} />

        <Col debug>
          <Col debug left>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>

          <Col debug>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>

          <Col debug right>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>
        </Col>

        <Spacer height={10} />

        <Col debug>
          <Col debug bottom left>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>

          <Col debug bottom>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>

          <Col debug bottom right>
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
            <Row debug height={10} width={10} />
          </Col>
        </Col>

        <Spacer height={10} />

        <Col debug spaceBetween>
          <Row debug height={10} width={10} />
          <Row debug height={10} width={10} />
          <Row debug height={10} width={10} />
        </Col>

        <Spacer height={10} />

        <Col debug spaceAround>
          <Row debug height={10} width={10} />
          <Row debug height={10} width={10} />
          <Row debug height={10} width={10} />
        </Col>

        <Spacer height={10} />

        <Col debug spaceEvenly>
          <Row debug height={10} width={10} />
          <Row debug height={10} width={10} />
          <Row debug height={10} width={10} />
        </Col>
      </Layout>
    )
  }
}
