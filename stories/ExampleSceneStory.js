// @flow

import React from 'react'
import { Text as RNText, TouchableOpacity } from 'react-native'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

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

          <Row shrinkVertical>
            <Slider height={50} />
          </Row>
        </Col>

        <Row maxHeight={400} flex={1}>
          <NumPad onPress={() => null} />
        </Row>
      </Layout>
    )
  }
}

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
      <Col right shrinkHorizontal>
        <Row shrinkHorizontal>
          <Text bold size={16}>
            Fee:
          </Text>
        </Row>

        <Row right shrinkHorizontal>
          <Text bold size={16}>
            Address:
          </Text>
        </Row>
      </Col>

      <Spacer width={8} />

      <Col left>
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
    <Col maxWidth={600} {...props}>
      <NumPadRow>
        <NumPadButton label={'1'} />
        <Spacer width={4} />
        <NumPadButton label={'2'} />
        <Spacer width={4} />
        <NumPadButton label={'3'} />
      </NumPadRow>

      <Spacer height={4} />

      <NumPadRow>
        <NumPadButton label={'4'} />
        <Spacer width={4} />
        <NumPadButton label={'5'} />
        <Spacer width={4} />
        <NumPadButton label={'6'} />
      </NumPadRow>

      <Spacer height={4} />

      <NumPadRow>
        <NumPadButton label={'7'} />
        <Spacer width={4} />
        <NumPadButton label={'8'} />
        <Spacer width={4} />
        <NumPadButton label={'9'} />
      </NumPadRow>

      <Spacer height={4} />

      <NumPadRow>
        <NumPadButton label={'.'} />
        <Spacer width={4} />
        <NumPadButton label={'0'} />
        <Spacer width={4} />
        <NumPadButton label={'<-'} />
      </NumPadRow>
    </Col>
  )
}
const NumPadRow = Row
const NumPadButton = ({ label, onPress = () => null, ...props }) => (
  <Col borderRadius={15} {...props}>
    <TouchableOpacity
      style={{ height: '100%', width: '100%', backgroundColor: '#0099cc' }}
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
