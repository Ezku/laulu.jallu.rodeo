import * as React from 'react'

import { Title, Subtitle } from '../skin/titles'
import { Container, Section } from './Layout'

export default function Heading() {
  return (
    <Container>
      <Section>
        <Title>laulu.jallu.rodeo</Title>
        <Subtitle>Salattujen laulujen kirja</Subtitle>
      </Section>
    </Container>
  )
}
