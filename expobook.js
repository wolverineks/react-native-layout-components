// @flow

import createExpobook from 'expobook'
import React from 'react'
import { Button, View } from 'react-native'

const expobook = createExpobook()

type Props = {||}
type State = {| debug: boolean, title: string |}

class MyButton extends React.Component<Props, State> {
  state = {
    debug: false,
    title: 'Hello'
  };

  render () {
    const debugStyle = this.state.debug
      ? { borderColor: 'red', borderWidth: 1 }
      : null

    return (
      <View>
        <Button title={'DEBUG'} onPress={this.handleDebugPress} />
        <View style={debugStyle}>
          <Button title={this.state.title} onPress={this.handleButtonPress} />
        </View>
      </View>
    )
  }

  handleDebugPress = () => {
    this.setState({ debug: !this.state.debug })
  };

  handleButtonPress = () => {
    const title = this.state.title === 'Hello' ? 'Goodbye' : 'Hello'
    this.setState({ title })
  };
}

expobook.add('My Button', () => <MyButton />)

expobook.add('Another Button', () => <MyButton />)

export default expobook.build()
