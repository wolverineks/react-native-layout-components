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
export class SizeShowcaseStory extends React.Component<Props> {
  render () {
    return (
      <Layout padding={4}>
        <Row height={50} style={styles.header}>
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

const ColInCol = () => {
  return (
    <Col style={styles.colInCol}>
      <BackgroundLabel label={'<Col>'} />

      <Col debug width={150}>
        <Text>{'<Col width={150}>'}</Text>
      </Col>

      <Col debug height={20}>
        <Text>{'<Col height={20}>'}</Text>
      </Col>

      <Col debug height={80} width={80}>
        <Text>{'<Col height={80} width={80}>'}</Text>
      </Col>
    </Col>
  )
}

const RowInRow = () => {
  return (
    <Row bottom style={styles.rowInRow}>
      <BackgroundLabel label={'<Row bottom>'} />

      <Row debug height={35}>
        <Text>{'<Row height={35}>'}</Text>
      </Row>

      <Row debug width={145}>
        <Text>{'<Row width={145}>'}</Text>
      </Row>

      <Row debug height={100} width={100}>
        <Text>{'<Row height={100} width={100}>'}</Text>
      </Row>
    </Row>
  )
}

const RowInCol = () => {
  return (
    <Col left style={styles.rowInCol}>
      <BackgroundLabel label={'<Col left>'} />

      <Row debug height={20}>
        <Text>{'<Row height={20}>'}</Text>
      </Row>

      <Row debug width={145}>
        <Text>{'<Row width={145}>'}</Text>
      </Row>

      <Row debug height={80} width={80}>
        <Text>{'<Row height={80} width={80}>'}</Text>
      </Row>
    </Col>
  )
}

const ColInRow = () => {
  return (
    <Row top style={styles.colInRow}>
      <BackgroundLabel label={'<Row top>'} />

      <Col debug height={35}>
        <Text>{'<Col height={35}>'}</Text>
      </Col>

      <Col debug width={145}>
        <Text>{'<Col width={145}>'}</Text>
      </Col>

      <Col debug height={100} width={100}>
        <Text>{'<Col height={100} width={100}>'}</Text>
      </Col>
    </Row>
  )
}
