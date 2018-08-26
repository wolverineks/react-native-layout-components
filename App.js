// @flow

/* globals __DEV__ */

import { KeepAwake } from 'expo'
import app from './__expobook__/'

// eslint-disable-next-line import/no-unresolved, import/extensions
import expobook from './expobook'

// $FlowFixMe
if (__DEV__) {
  KeepAwake.activate()
}

export default app(expobook)
