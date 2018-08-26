// @flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export type Props = {||}

export default class App extends React.Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    )
  }
}

const THEME = {
  COLORS: {
    WHITE: 'white'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
