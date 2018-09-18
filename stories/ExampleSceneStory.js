// @flow

import React from 'react'
import { Text as RNText, TouchableOpacity } from 'react-native'

import Row from '../src/Row.js'
import Col from '../src/Col.js'

type Props = {||}
type State = {|
  address: string,
  exchangeRate: number,
  fee: string,
  primary: string,
  primaryCurrencyCode: string,
  primarySymbol: string,
  secondary: string,
  secondaryCurrencyCode: string,
  secondaryFee: string,
  secondarySymbol: string
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
      // eslint-disable-next-line
      <Layout style={{ backgroundColor: '#0066cc' }}>
        <Col spaceBetween paddingHorizontal={8}>
          <Spacer height={8} />

          <Row
            // eslint-disable-next-line
            style={{ backgroundColor: '#0099cc', borderRadius: 10 }}
            height={32}
            padding={4}
          >
            <ExchangeRate exchangeRate={this.state.exchangeRate} />
          </Row>

          <Spacer maxHeight={8} />

          <Row
            // eslint-disable-next-line
            style={{ backgroundColor: '#0099cc', borderRadius: 10 }}
            height={100}
          >
            <FlipInput
              primary={this.state.primary}
              primaryCurrencyCode={this.state.primaryCurrencyCode}
              primarySymbol={this.state.primarySymbol}
              secondary={this.state.secondary}
              secondaryCurrencyCode={this.state.secondaryCurrencyCode}
              secondarySymbol={this.state.secondarySymbol}
            />
          </Row>

          <Spacer maxHeight={8} />

          <Row
            // eslint-disable-next-line
            style={{ borderRadius: 10, backgroundColor: '#0099cc' }}
            padding={12}
          >
            <TransactionDetails
              address={this.state.address}
              fee={this.state.fee}
              primary={this.state.primary}
              primarySymbol={this.state.primarySymbol}
              secondary={this.state.secondary}
              secondaryFee={this.state.secondaryFee}
              secondarySymbol={this.state.secondarySymbol}
            />
          </Row>

          <Spacer maxHeight={8} />

          <Row
            // eslint-disable-next-line
            style={{ backgroundColor: '#0099cc', borderRadius: 130 }}
            height={60}
          >
            <Slider />
          </Row>

          <Spacer maxHeight={8} />
        </Col>

        <Row height={250}>
          <NumPad />
        </Row>
      </Layout>
    )
  }
}

export type TextProps = {|
  bold?: boolean,
  children?: string | number,
  size?: number
|}
const Text = ({ children, size = 12, bold, ...props }: TextProps) => (
  <RNText
    // eslint-disable-next-line
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
    <Row>
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
            {primarySymbol}
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

const ExchangeRate = ({ exchangeRate, ...props }) => (
  // eslint-disable-next-line
  <Row {...props}>
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
  fee: string,
  primary: string,
  primarySymbol: string,
  secondary: string,
  secondaryFee: string,
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
    <Row debug={debug}>
      <Col right spaceEvenly shrinkHorizontal>
        <Text bold size={16}>
          Fee:
        </Text>

        <Text bold size={16}>
          Address:
        </Text>
      </Col>

      <Spacer width={8} />

      <Col left spaceEvenly>
        <Text>
          <Text size={16}>{fee}</Text>
          <Text size={16}> {primarySymbol}</Text>
          <Text size={16}> ({secondarySymbol}</Text>
          <Text size={16}> {secondaryFee})</Text>
        </Text>

        <Text ellipsizeMode={'middle'} numberOfLines={1} size={16}>
          {address}
        </Text>
      </Col>
    </Row>
  )
}

const Slider = () => (
  // eslint-disable-next-line
  <Row>
    <Text size={24}>{'<- <- <- <- <- <- <- <- <-'}</Text>
  </Row>
)

const NumPad = ({ onPress, ...props }) => {
  return (
    <Col maxWidth={600} {...props}>
      <NumPadRow>
        <NumPadButton label={'7'} />
        <Spacer width={4} />
        <NumPadButton label={'8'} />
        <Spacer width={4} />
        <NumPadButton label={'9'} />
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
        <NumPadButton label={'1'} />
        <Spacer width={4} />
        <NumPadButton label={'2'} />
        <Spacer width={4} />
        <NumPadButton label={'3'} />
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
const NumPadButton = ({ label, ...props }) => (
  // eslint-disable-next-line
  <Col style={{ borderRadius: 15 }} {...props}>
    <TouchableOpacity
      // eslint-disable-next-line
      style={{ height: '100%', width: '100%', backgroundColor: '#0099cc' }}
      onPress={() => null}
    >
      <Col>
        <Text bold size={30}>
          {label}
        </Text>
      </Col>
    </TouchableOpacity>
  </Col>
)
