import * as React from 'react'
import glamorous from 'glamorous'

import { Title, Subtitle } from '../skin/titles'
import { Container, Section } from './Layout'

const CenteredSection = glamorous(Section)({
  textAlign: 'center'
})

export default function Heading() {
  return (
    <Container>
      <CenteredSection>
        <Title>laulu.jallu.rodeo</Title>
        <Subtitle>Löydä just se teekkaribiisi</Subtitle>
      </CenteredSection>
    </Container>
  )
}
