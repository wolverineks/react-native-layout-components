// @flow

import React from 'react'
import { Text } from 'react-native'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

export const Layout = Col

export type Props = {||}
export class PrototypingStory extends React.Component<Props> {
  render () {
    return (
      <Layout debug>
        <Col debug>
          <Row debug wrap maxHeight={145} maxWidth={145}>
            <Text>Hello, World!</Text>
          </Row>
          <Row debug width={45} />
          <Row debug height={45} />
        </Col>

        <Col debug>
          <Row debug height={45} width={45} />
          <Row debug width={45} />
          <Row debug height={45} />
        </Col>
      </Layout>
    )
  }
}
