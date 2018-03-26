import * as React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'

import { Title, Subtitle } from '../skin/titles'
import { Container, Section } from './Layout'

const CenteredSection = glamorous(Section)({
  textAlign: 'center'
})

const whiteTextShadow = {
  textShadow: '1px 1px white'
}

export default function Heading() {
  return (
    <Container>
      <CenteredSection {...css(whiteTextShadow)}>
        <Title>laulu.jallu.rodeo</Title>
        <Subtitle>Löydä just se teekkaribiisi</Subtitle>
      </CenteredSection>
    </Container>
  )
}
