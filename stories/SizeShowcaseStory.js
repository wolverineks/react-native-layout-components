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
      <Layout padding={24}>
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

      <Col debug height={25}>
        <Text>{'<Col height={25}>'}</Text>
      </Col>

      <Col debug height={50} width={250}>
        <Text>{'<Col height={50} width={250}>'}</Text>
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

      <Row debug height={70} width={100}>
        <Text>{'<Row height={70} width={100}>'}</Text>
      </Row>
    </Row>
  )
}

const RowInCol = () => {
  return (
    <Col left style={styles.rowInCol}>
      <BackgroundLabel label={'<Col left>'} />

      <Row debug height={25}>
        <Text>{'<Row height={25}>'}</Text>
      </Row>

      <Row debug width={145}>
        <Text>{'<Row width={145}>'}</Text>
      </Row>

      <Row debug height={40} width={200}>
        <Text>{'<Row height={40} width={200}>'}</Text>
      </Row>
    </Col>
  )
}

const ColInRow = () => {
  return (
    <Row top style={styles.colInRow}>
      <BackgroundLabel label={'<Row top>'} />

      <Col debug height={45}>
        <Text>{'<Col height={45}>'}</Text>
      </Col>

      <Col debug width={125}>
        <Text>{'<Col width={125}>'}</Text>
      </Col>

      <Col debug height={60} width={145}>
        <Text>{'<Col height={60} width={145}>'}</Text>
      </Col>
    </Row>
  )
}
