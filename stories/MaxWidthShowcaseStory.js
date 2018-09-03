// @flow

import React, { type Node } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TouchableWithoutFeedback as Touchable,
  View
} from 'react-native'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

const Layout = Col

export const COLORS = {
  RED: 'salmon',
  ORANGE: 'sandybrown',
  YELLOW: 'khaki',
  GREEN: 'mediumaquamarine',
  BLUE: 'skyblue'
}

const styles = StyleSheet.create({
  backgroundLabel: { height: '100%', width: '100%', position: 'absolute' },
  backgroundText: { fontSize: 32, opacity: 0.5 },
  section1: { backgroundColor: COLORS.RED },
  section2: { backgroundColor: COLORS.ORANGE },
  section3: { backgroundColor: COLORS.YELLOW },
  section4: { backgroundColor: COLORS.GREEN },
  section5: { backgroundColor: COLORS.BLUE }
})

type Props = {||}
export class MaxWidthShowcaseStory extends React.Component<Props> {
  render () {
    return (
      <Layout padding={24}>
        <Row height={50} style={styles.section1}>
          <BackgroundLabel label={'<Row height={50}>'} />
          <Header />
        </Row>

        <Col style={styles.section2}>
          <BackgroundLabel label={'<Col>'} />
          <ColInCol />
        </Col>

        <Row style={styles.section3}>
          <BackgroundLabel label={'<Row bottom>'} />
          <RowInRow />
        </Row>

        <Col style={styles.section4}>
          <BackgroundLabel label={'<Col left>'} />
          <RowInCol />
        </Col>

        <Row style={styles.section5}>
          <BackgroundLabel label={'<Row top>'} />
          <ColInRow />
        </Row>
      </Layout>
    )
  }
}

type BackgroundLabelProps = {| label: string |}
const BackgroundLabel = ({ label }: BackgroundLabelProps) => {
  return (
    <View style={styles.backgroundLabel}>
      <Text style={styles.backgroundText}>{label}</Text>
    </View>
  )
}

type AlertButtonProps = {| children: Node, message: string |}
const AlertButton = ({ message, children }: AlertButtonProps) => {
  return (
    <Touchable onPress={() => Alert.alert(message)}>
      <View>{children}</View>
    </Touchable>
  )
}

const Header = () => {
  return (
    <Row>
      <Text>Tap any element to see its props</Text>
    </Row>
  )
}

const ColInCol = () => {
  return (
    <Col alignItems={'center'}>
      <Col debug maxWidth={150}>
        <AlertButton message={'<Col debug maxWidth={150}>'}>
          <Text>1. Col in Col</Text>
        </AlertButton>
      </Col>

      <Col debug maxWidth={150} marginHorizontal={'auto'}>
        <AlertButton message={'<Col debug maxWidth={150}>'}>
          <Text>2. Col in Col</Text>
        </AlertButton>
      </Col>

      <Col debug maxWidth={150}>
        <AlertButton message={'<Col debug maxWidth={150}>'}>
          <Text>3. Col in Col</Text>
        </AlertButton>
      </Col>
    </Col>
  )
}

const RowInRow = () => {
  return (
    <Row>
      <Row debug maxWidth={150}>
        <AlertButton message={'<Row debug maxWidth={150}>'}>
          <Text>1. Row in Row</Text>
        </AlertButton>
      </Row>

      <Row debug maxWidth={150}>
        <AlertButton message={'<Row debug maxWidth={150}>'}>
          <Text>2. Row in Row</Text>
        </AlertButton>
      </Row>

      <Row debug maxWidth={150}>
        <AlertButton message={'<Row debug maxWidth={150}>'}>
          <Text>3. Row in Row</Text>
        </AlertButton>
      </Row>
    </Row>
  )
}

const RowInCol = () => {
  return (
    <Col>
      <Row debug maxWidth={150}>
        <AlertButton message={'<Row debug maxWidth={150}>'}>
          <Text>1. Row in Col</Text>
        </AlertButton>
      </Row>

      <Row debug maxWidth={150}>
        <AlertButton message={'<Row debug maxWidth={150}>'}>
          <Text>2. Row in Col</Text>
        </AlertButton>
      </Row>

      <Row debug maxWidth={150}>
        <AlertButton message={'<Row debug maxWidth={150}>'}>
          <Text>3. Row in Col</Text>
        </AlertButton>
      </Row>
    </Col>
  )
}

const ColInRow = () => {
  return (
    <Row>
      <Col debug maxWidth={50} width={250}>
        <AlertButton message={'<Col debug maxWidth={50}>'}>
          <Text>1.ColinRow</Text>
        </AlertButton>
      </Col>

      <Col debug maxWidth={50} width={250}>
        <AlertButton message={'<Col debug maxWidth={50}>'}>
          <Text>2.ColinRow</Text>
        </AlertButton>
      </Col>

      <Col debug maxWidth={50} width={250}>
        <AlertButton message={'<Col debug maxWidth={50}>'}>
          <Text>3.ColinRow</Text>
        </AlertButton>
      </Col>
    </Row>
  )
}
