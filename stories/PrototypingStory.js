// @flow

import React from 'react'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native'

import * as Animatable from 'react-native-animatable'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

export const Layout = Col

const animations = {
  enter: {
    from: {
      // opacity: 0,
      maxHeight: 0
    },
    to: {
      // opacity: 1,
      maxHeight: 999
    }
  },
  exit: {
    from: {
      // opacity: 1,
      maxHeight: 100
    },
    to: {
      // opacity: 0,
      maxHeight: 0
    }
  }
}

Animatable.initializeRegistryWithDefinitions(animations)
const AnimatableRow = Animatable.createAnimatableComponent(Col)

export type Props = {||}
export class PrototypingStory extends React.Component<Props> {
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

        <Col debug>
          {this.state.items.map((item, index) => {
            return (
              <Transition key={item}>
                <Text>{item}</Text>
                <Text>{item}</Text>
              </Transition>
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
    const [first, ...rest] = this.state.items
    this.setState({ items: rest })
  }
}

export class Transition extends React.Component {
  componentDidMount () {
    setTimeout(this.ref.enter, 1000)
  }

  render () {
    return (
      <AnimatableRow debug ref={ref => (this.ref = ref)} {...this.props}>
        {this.props.children}
      </AnimatableRow>
    )
  }
}
