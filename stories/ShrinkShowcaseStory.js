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
export class ShrinkShowcaseStory extends React.Component<Props> {
  render () {
    return (
      <Layout padding={24}>
        <Row height={50}>
          <Header />
          <BackgroundLabel label={'<Row height={50}>'} />
        </Row>

        <Row>
          <ColInCol />
        </Row>

        <Row>
          <RowInRow />
        </Row>

        <Row>
          <RowInCol />
        </Row>

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

const Header = () => {
  return (
    <Row style={styles.header}>
      <Text>Tap any element to see its props</Text>
    </Row>
  )
}

const ColInCol = () => {
  return (
    <Col style={styles.colInCol}>
      <BackgroundLabel label={'<Col>'} />

      <Col debug shrink>
        <Text>{'<Col shrink>'}</Text>
      </Col>

      <Col debug shrinkVertical>
        <Text>{'<Col shrinkVertical>'}</Text>
      </Col>

      <Col debug shrinkHorizontal>
        <Text>{'<Col shrinkHorizontal>'}</Text>
      </Col>
    </Col>
  )
}

const RowInRow = () => {
  return (
    <Row bottom style={styles.rowInRow}>
      <BackgroundLabel label={'<Row bottom>'} />

      <Row debug shrink>
        <Text>{'<Row shrink>'}</Text>
      </Row>

      <Row debug shrinkHorizontal>
        <Text>{'<Row shrinkHorizontal>'}</Text>
      </Row>

      <Row debug shrinkVertical>
        <Text>{'<Row shrinkVertical>'}</Text>
      </Row>
    </Row>
  )
}

const RowInCol = () => {
  return (
    <Col left style={styles.rowInCol}>
      <BackgroundLabel label={'<Col left>'} />

      <Row debug shrink>
        <Text>{'<Row shrink>'}</Text>
      </Row>

      <Row debug shrinkHorizontal>
        <Text>{'<Row shrinkHorizontal>'}</Text>
      </Row>

      <Row debug shrinkVertical>
        <Text>{'<Row shrinkVertical>'}</Text>
      </Row>
    </Col>
  )
}

const ColInRow = () => {
  return (
    <Row top style={styles.colInRow}>
      <BackgroundLabel label={'<Row top>'} />

      <Col debug shrink>
        <Text>{'<Col shrink>'}</Text>
      </Col>

      <Col debug shrinkHorizontal>
        <Text>{'<Col shrinkHorizontal>'}</Text>
      </Col>

      <Col debug shrinkVertical>
        <Text>{'<Col shrinkVertical>'}</Text>
      </Col>
    </Row>
  )
}
