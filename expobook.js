// @flow

import createExpobook from 'expobook'
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import Row from './src/Row.js'
import Col from './src/Col.js'

const Layout = Col
const Header = Row
const Body = Col

const expobook = createExpobook()

type Props = {||}
type State = {| debug: boolean, title: string |}

class MyButton extends React.Component<Props, State> {
  state = {
    debug: false,
    title: 'Hello'
  }

  render () {
    return (
      <Layout>
        <Header height={60}>
          <TouchableOpacity onPress={this.handleDebugPress}>
            <Text>DEBUG</Text>
          </TouchableOpacity>
        </Header>

        <Body top>
          <Row shrinkVertical debug={this.state.debug}>
            <TouchableOpacity onPress={this.handleButtonPress}>
              <Text>{this.state.title}</Text>
            </TouchableOpacity>
          </Row>
        </Body>
      </Layout>
    )
  }

  handleDebugPress = () => {
    this.setState({ debug: !this.state.debug })
  }

  handleButtonPress = () => {
    const title = this.state.title === 'Hello' ? 'Goodbye' : 'Hello'
    this.setState({ title })
  }
}

expobook.add('My Button', () => <MyButton />)

expobook.add('Another Button', () => <MyButton />)

export default expobook.build()
