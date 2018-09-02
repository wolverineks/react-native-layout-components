// @flow

import React from 'react'
import { Text as RNText, TouchableOpacity } from 'react-native'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

export type TextProps = {|
  bold?: boolean,
  children?: string,
  size?: number
|}
const Text = ({ children, size = 12, bold, ...props }: TextProps) => (
  <RNText
    style={[{ fontSize: size, color: 'white' }, bold && { fontWeight: 'bold' }]}
    {...props}
  >
    {children}
  </RNText>
)

const Layout = Col
const Spacer = Row

export type FlipInputProps = {|
  primary: string,
  primaryCurrencyCode: string,
  primarySymbol: string,
  secondary: string,
  secondaryCurrencyCode: string,
  secondarySymbol: string
|}
const FlipInput = (props: FlipInputProps) => {
  const {
    primary,
    primaryCurrencyCode,
    primarySymbol,
    secondary,
    secondaryCurrencyCode,
    secondarySymbol
  } = props

  return (
    <Row style={{ borderRadius: 10, backgroundColor: '#0099cc' }}>
      <Col width={'15%'}>
        <TouchableOpacity onPress={() => null}>
          <Col>
            <Text size={24}>{'<-'}</Text>
            <Text size={24}>{'->'}</Text>
          </Col>
        </TouchableOpacity>
      </Col>

      <Col>
        <Row>
          <Text bold size={24}>
            {' '}
            {primarySymbol}{' '}
          </Text>
          <Text bold size={24}>
            {primary}
          </Text>
        </Row>

        <Row>
          <Text size={24}>{secondarySymbol} </Text>
          <Text size={24}>{secondary}</Text>
        </Row>
      </Col>

      <Col width={'15%'}>
        <Row>
          <Text size={24}>{primaryCurrencyCode}</Text>
        </Row>

        <Row>
          <Text size={24}>{secondaryCurrencyCode}</Text>
        </Row>
      </Col>
    </Row>
  )
}

const ExchangeRate = ({ exchangeRate, debug }) => (
  <Row borderRadius={10} backgroundColor={'#0099cc'} debug={debug}>
    <Text size={18}>B </Text>
    <Text size={18}>1</Text>
    <Text size={18}> = </Text>
    <Text size={18}>$ </Text>
    <Text size={18}>{exchangeRate}</Text>
    <Text size={18}> USD</Text>
  </Row>
)

export type TransactionDetailsProps = {|
  address: string,
  debug?: boolean,
  fee: number,
  primary: number,
  primarySymbol: string,
  secondary: number,
  secondaryFee: number,
  secondarySymbol: string
|}
const TransactionDetails = ({
  fee,
  primary,
  primarySymbol,
  secondary,
  secondaryFee,
  secondarySymbol,
  address,
  debug
}: TransactionDetailsProps) => {
  return (
    <Row
      style={{ borderRadius: 10, backgroundColor: '#0099cc' }}
      padding={12}
      debug={debug}
    >
      <Col shrinkHorizontal>
        <Row right>
          <Text bold size={16}>
            Fee:
          </Text>
        </Row>

        <Row right>
          <Text bold size={16}>
            Address:
          </Text>
        </Row>
      </Col>

      <Spacer width={8} />

      <Col>
        <Row left>
          <Text size={16}>{fee}</Text>
          <Text size={16}> {primarySymbol}</Text>
          <Text size={16}> ({secondarySymbol}</Text>
          <Text size={16}> {secondaryFee})</Text>
        </Row>

        <Row left>
          <Text ellipsizeMode={'middle'} numberOfLines={1} size={16}>
            {address}
          </Text>
        </Row>
      </Col>
    </Row>
  )
}

const Slider = ({ ...props }) => (
  <Row style={{ backgroundColor: '#0099cc', borderRadius: 130 }} {...props}>
    <Text size={24}>{'<- <- <- <- <- <- <- <- <-'}</Text>
  </Row>
)
const NumPad = ({ onPress, ...props }) => {
  return (
    <Col style={{ backgroundColor: '#0099cc' }} {...props}>
      <NumPadRow>
        <NumPadButton debug onPress={() => null} label={'1'} />
        <NumPadButton debug onPress={() => null} label={'2'} />
        <NumPadButton debug onPress={() => null} label={'3'} />
      </NumPadRow>

      <NumPadRow>
        <NumPadButton debug onPress={() => null} label={'4'} />
        <NumPadButton debug onPress={() => null} label={'5'} />
        <NumPadButton debug onPress={() => null} label={'6'} />
      </NumPadRow>

      <NumPadRow>
        <NumPadButton debug onPress={() => null} label={'7'} />
        <NumPadButton debug onPress={() => null} label={'8'} />
        <NumPadButton debug onPress={() => null} label={'9'} />
      </NumPadRow>

      <NumPadRow>
        <NumPadButton debug onPress={() => null} label={'.'} />
        <NumPadButton debug onPress={() => null} label={'0'} />
        <NumPadButton debug onPress={() => null} label={'<-'} />
      </NumPadRow>
    </Col>
  )
}
const NumPadRow = Row
const NumPadButton = ({ label, onPress, ...props }) => (
  <Col {...props}>
    <TouchableOpacity
      style={{ height: '100%', width: '100%' }}
      onPress={onPress}
    >
      <Col>
        <Text bold size={30}>
          {label}
        </Text>
      </Col>
    </TouchableOpacity>
  </Col>
)

type Props = {||}
type State = {|
  address: string,
  destination: string,
  exchangeRate: number,
  fee: string,
  primary: string,
  primaryCurrencyCode: string,
  primarySymbol: string,
  secondary: string,
  secondaryCurrencyCode: string,
  secondaryFee: string,
  secondarySymbol: string,
  uniqueIdentifier: string
|}

export class ExampleSceneStory extends React.Component<Props, State> {
  state = {
    primary: '0.00000000',
    secondary: '0.00',
    primarySymbol: 'B',
    primaryCurrencyCode: 'BTC',
    secondaryCurrencyCode: 'USD',
    secondarySymbol: '$',
    fee: '0.0000123',
    secondaryFee: '0.08',
    destination: 'Airbitz, inc.',
    address: '12139q8xM084QC30MTX48F12139q8xM084QC30MTX48F',
    exchangeRate: 6281.32
  }

  render () {
    return (
      <Layout style={{ backgroundColor: '#0066cc' }}>
        <Col padding={8}>
          <Row shrinkVertical>
            <ExchangeRate {...this.state} />
          </Row>

          <Spacer height={8} />

          <Row>
            <FlipInput {...this.state} />
          </Row>

          <Spacer height={8} />

          <Row>
            <TransactionDetails {...this.state} />
          </Row>

          <Spacer height={8} />

          <Row
            shrinkVertical
            minHeight={60}
            maxWidth={500}
            marginLeft={'auto'}
            marginRight={'auto'}
          >
            <Slider />
          </Row>
        </Col>

        <Row
          marginLeft={'auto'}
          marginRight={'auto'}
          maxWidth={500}
          maxHeight={500}
        >
          <NumPad onPress={() => null} />
        </Row>
      </Layout>
    )
  }
}
