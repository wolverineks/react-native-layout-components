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

import * as Animatable from 'react-native-animatable'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

export const Layout = Col

export type Props = {||}
export type State = {| items: Array<string | number> |}
export class PrototypingStory extends React.Component<Props, State> {
  state = {
    items: []
  }

  render () {
    return (
      <Layout debug>
        <Row shrinkVertical debug>
          <TouchableWithoutFeedback onPress={this.addItem}>
            <Row debug>
              <Text>+</Text>
            </Row>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.removeItem}>
            <Row debug>
              <Text>-</Text>
            </Row>
          </TouchableWithoutFeedback>
        </Row>

        <Col top debug>
          {this.state.items.map((item, index) => {
            return (
              <Animation key={item}>
                <Row
                  left
                  maxHeight={50}
                  style={{
                    borderColor: 'red',
                    borderTopWidth: 1,
                    borderBottomColor: 'blue',
                    borderBottomWidth: 1
                  }}
                >
                  <Text style={{ color: 'black' }}>{item}</Text>
                  <Text style={{ color: 'red' }}>{item}</Text>
                </Row>
              </Animation>
            )
          })}
        </Col>
      </Layout>
    )
  }

  addItem = () => {
    this.setState({ items: [this.state.items.length, ...this.state.items] })
  }

  addItems = () => {
    this.setState({ items: [0, 1, 2, 3, 4] })
  }

  removeItem = () => {
    const [, ...rest] = this.state.items
    this.setState({ items: rest })
  }
}

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

export type AnimationProps = {| children: Node, row?: boolean |}
export class Animation extends React.Component<AnimationProps> {
  render () {
    LayoutAnimation.easeInEaseOut()
    const { children } = this.props

    return children
  }
}
