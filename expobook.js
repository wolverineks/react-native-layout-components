// @flow

import createExpobook from 'expobook'
import React from 'react'

import { SizeShowcaseStory } from './stories/SizeShowcaseStory.js'
import { MaxWidthShowcaseStory } from './stories/MaxWidthShowcaseStory.js'
import { MaxHeightShowcaseStory } from './stories/MaxHeightShowcaseStory.js'
import { ShrinkShowcaseStory } from './stories/ShrinkShowcaseStory.js'
import { PrototypingStory } from './stories/PrototypingStory.js'
import { Prototyping1Story } from './stories/Prototyping1Story.js'
import { Prototyping2Story } from './stories/Prototyping2Story.js'
import { Prototyping3Story } from './stories/Prototyping3Story.js'
import { ExampleSceneStory } from './stories/ExampleSceneStory.js'

const expobook = createExpobook()
expobook.add('Size Showcase', () => <SizeShowcaseStory />)
expobook.add('Max Height Showcase', () => <MaxHeightShowcaseStory />)
expobook.add('Max Width Showcase', () => <MaxWidthShowcaseStory />)
expobook.add('Shrink Showcase', () => <ShrinkShowcaseStory />)
expobook.add('Prototyping', () => <PrototypingStory />)
expobook.add('Prototyping1', () => <Prototyping1Story />)
expobook.add('Prototyping2', () => <Prototyping2Story />)
expobook.add('Prototyping3', () => <Prototyping3Story />)
expobook.add('Example Scene', () => <ExampleSceneStory />)

export default expobook.build()
