// @flow

import createExpobook from 'expobook'
import React from 'react'

import { SizeShowcaseStory } from './stories/SizeShowcaseStory.js'
import { MaxWidthShowcaseStory } from './stories/MaxWidthShowcaseStory.js'
import { MaxHeightShowcaseStory } from './stories/MaxHeightShowcaseStory.js'
import { ShrinkShowcaseStory } from './stories/ShrinkShowcaseStory.js'
import { PrototypingStory } from './stories/PrototypingStory.js'
import { ExampleSceneStory } from './stories/ExampleSceneStory.js'

const expobook = createExpobook()
expobook.add('Size Showcase', () => <SizeShowcaseStory />)
expobook.add('Max Height Showcase', () => <MaxHeightShowcaseStory />)
expobook.add('Max Width Showcase', () => <MaxWidthShowcaseStory />)
expobook.add('Shrink Showcase', () => <ShrinkShowcaseStory />)
expobook.add('Prototyping', () => <PrototypingStory />)
expobook.add('Example Scene', () => <ExampleSceneStory />)

export default expobook.build()
