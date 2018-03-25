import * as React from 'react'

import hasShadow from '../skin/hasShadow'
import { Column } from './Grid'
import HeroColumns from './HeroColumns'
import { Title, Subtitle } from '../skin/titles'

export default function Heading() {
  return (
    <div {...hasShadow}>
      <HeroColumns>
        <Column size={12}>
          <Title>laulu.jallu.rodeo</Title>
          <Subtitle>Salattujen laulujen kirja</Subtitle>
        </Column>
      </HeroColumns>
    </div>
  )
}
