// @flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
  header: { backgroundColor: COLORS.RED },
  colInCol: { backgroundColor: COLORS.ORANGE },
  rowInRow: { backgroundColor: COLORS.YELLOW },
  rowInCol: { backgroundColor: COLORS.GREEN },
  colInRow: { backgroundColor: COLORS.BLUE }
})

type Props = {||}
export class MaxWidthShowcaseStory extends React.Component<Props> {
  render () {
    return (
      <Layout padding={4}>
        <Row height={50} style={styles.header}>
          <BackgroundLabel label={'<Row height={50}>'} />
        </Row>

        <Col>
          <ColInCol />
        </Col>

        <Row>
          <RowInRow />
        </Row>

        <Col>
          <RowInCol />
        </Col>

        <Row>
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

const ColInCol = () => {
  return (
    <Col debug style={styles.colInCol}>
      <BackgroundLabel label={'<Col>'} />

      <Col debug maxWidth={100}>
        <Text>{'<Col maxWidth={100}>'}</Text>
      </Col>

      <Col debug maxWidth={100}>
        <Text>{'<Col maxWidth={100}>'}</Text>
      </Col>

      <Col debug maxWidth={100}>
        <Text>{'<Col maxWidth={100}>'}</Text>
      </Col>
    </Col>
  )
}

const RowInRow = () => {
  return (
    <Row right style={styles.rowInRow}>
      <BackgroundLabel label={'<Row right>'} />

      <Row debug maxWidth={100}>
        <Text>{'<Row maxWidth={100}>'}</Text>
      </Row>

      <Row debug maxWidth={100}>
        <Text>{'<Row maxWidth={100}>'}</Text>
      </Row>

      <Row debug maxWidth={100}>
        <Text>{'<Row maxWidth={100}>'}</Text>
      </Row>
    </Row>
  )
}

const RowInCol = () => {
  return (
    <Col left style={styles.rowInCol}>
      <BackgroundLabel label={'<Col left>'} />

      <Row debug maxWidth={100}>
        <Text>{'<Row maxWidth={100}>'}</Text>
      </Row>

      <Row debug maxWidth={100}>
        <Text>{'<Row maxWidth={100}>'}</Text>
      </Row>

      <Row debug maxWidth={100}>
        <Text>{'<Row maxWidth={100}>'}</Text>
      </Row>
    </Col>
  )
}

const ColInRow = () => {
  return (
    <Row style={styles.colInRow}>
      <BackgroundLabel label={'<Row top>'} />

      <Col debug maxWidth={100}>
        <Text>{'<Col maxWidth={100}>'}</Text>
      </Col>

      <Col debug maxWidth={100}>
        <Text>{'<Col maxWidth={100}>'}</Text>
      </Col>

      <Col debug maxWidth={100}>
        <Text>{'<Col maxWidth={100}>'}</Text>
      </Col>
    </Row>
  )
}
