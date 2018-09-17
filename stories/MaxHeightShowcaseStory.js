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

const rawStyles = {
  backgroundLabel: { height: '100%', width: '100%', position: 'absolute' },
  backgroundText: { fontSize: 32, opacity: 0.5 },
  header: { backgroundColor: COLORS.RED },
  colInCol: { backgroundColor: COLORS.ORANGE },
  rowInRow: { backgroundColor: COLORS.YELLOW },
  rowInCol: { backgroundColor: COLORS.GREEN },
  colInRow: { backgroundColor: COLORS.BLUE }
}

const styles: typeof rawStyles = StyleSheet.create(rawStyles)

type Props = {||}
export class MaxHeightShowcaseStory extends React.Component<Props> {
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
    <Col debug bottom style={styles.colInCol}>
      <BackgroundLabel label={'<Col bottom>'} />

      <Col debug maxHeight={40}>
        <Text>{'<Col maxHeight={40}>'}</Text>
      </Col>

      <Col debug maxHeight={40}>
        <Text>{'<Col maxHeight={40}>'}</Text>
      </Col>

      <Col debug height={40}>
        <Text>{'<Col height={40}>'}</Text>
      </Col>
    </Col>
  )
}

const RowInRow = () => {
  return (
    <Row bottom style={styles.rowInRow}>
      <BackgroundLabel label={'<Row bottom>'} />

      <Row debug maxHeight={100}>
        <Text>{'<Row maxHeight={100}>'}</Text>
      </Row>

      <Row debug maxHeight={100}>
        <Text>{'<Row maxHeight={100}>'}</Text>
      </Row>

      <Row debug height={100}>
        <Text>{'<Row height={100}>'}</Text>
      </Row>
    </Row>
  )
}

const RowInCol = () => {
  return (
    <Col bottom style={styles.rowInCol}>
      <BackgroundLabel label={'<Col bottom>'} />

      <Row debug maxHeight={40}>
        <Text>{'<Row maxHeight={40}>'}</Text>
      </Row>

      <Row debug maxHeight={40}>
        <Text>{'<Row maxHeight={40}>'}</Text>
      </Row>

      <Row debug height={40}>
        <Text>{'<Row height={40}>'}</Text>
      </Row>
    </Col>
  )
}

const ColInRow = () => {
  return (
    <Row bottom style={styles.colInRow}>
      <BackgroundLabel label={'<Row bottom>'} />

      <Col debug maxHeight={100}>
        <Text>{'<Col maxHeight={100}>'}</Text>
      </Col>

      <Col debug maxHeight={100}>
        <Text>{'<Col maxHeight={100}>'}</Text>
      </Col>

      <Col debug height={100}>
        <Text>{'<Col height={100}>'}</Text>
      </Col>
    </Row>
  )
}
