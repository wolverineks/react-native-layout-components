// @flow

import React from 'react'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

const Layout = Col

type Props = {||}
export class ShowcaseStory extends React.Component<Props> {
  render () {
    return (
      <Layout debug paddingVertical={24} paddingRight={10} paddingLeft={'1%'}>
        <Row debug height={50}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('height={50}')}>
            <View>
              <Text>Tap any component to view layout props</Text>
            </View>
          </TouchableWithoutFeedback>
        </Row>

        <Row debug>
          <Col debug width={60} height={60}>
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('width={60} height={60}')}
            >
              <View>
                <Text>Col inside Row</Text>
              </View>
            </TouchableWithoutFeedback>
          </Col>

          <Col debug width={60}>
            <TouchableWithoutFeedback onPress={() => Alert.alert('width={60}')}>
              <View>
                <Text>Col inside Row</Text>
              </View>
            </TouchableWithoutFeedback>
          </Col>

          <Col debug height={60}>
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('height={60}')}
            >
              <View>
                <Text>Col inside Row</Text>
              </View>
            </TouchableWithoutFeedback>
          </Col>
        </Row>

        <Col right debug>
          <Col shrinkVertical debug>
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('shrinkVertical')}
            >
              <View>
                <Text>Col inside Col</Text>
              </View>
            </TouchableWithoutFeedback>
          </Col>

          <Col shrinkHorizontal debug>
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('shrinkHorizontal')}
            >
              <View>
                <Text>Col inside Col</Text>
              </View>
            </TouchableWithoutFeedback>
          </Col>
        </Col>

        <Row top spaceAround height={100} debug>
          <Row shrinkVertical debug>
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('shrinkVertical')}
            >
              <View>
                <Text>Row inside Row</Text>
              </View>
            </TouchableWithoutFeedback>
          </Row>

          <Row shrinkHorizontal debug>
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('shrinkHorizontal')}
            >
              <View>
                <Text>Row inside Row</Text>
              </View>
            </TouchableWithoutFeedback>
          </Row>

          <Row shrink debug>
            <TouchableWithoutFeedback onPress={() => Alert.alert('shrink')}>
              <View>
                <Text>Row inside Row</Text>
              </View>
            </TouchableWithoutFeedback>
          </Row>
        </Row>

        <Col left debug>
          <Row width={250} height={'25%'} debug>
            <TouchableWithoutFeedback
              onPress={() => Alert.alert('width={250} height={25%}')}
            >
              <View>
                <Text>Row inside Col</Text>
              </View>
            </TouchableWithoutFeedback>
          </Row>

          <Row width={50} debug>
            <TouchableWithoutFeedback onPress={() => Alert.alert('width={50}')}>
              <View>
                <Text>Row inside Col</Text>
              </View>
            </TouchableWithoutFeedback>
          </Row>
        </Col>
      </Layout>
    )
  }
}
