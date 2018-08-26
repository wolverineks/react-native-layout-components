// @flow

import createExpobook from 'expobook'
import React from 'react'

import { ShowcaseStory } from './stories/ShowcaseStory.js'

const expobook = createExpobook()
expobook.add('Showcase', () => <ShowcaseStory />)

export default expobook.build()
