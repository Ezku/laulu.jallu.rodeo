import * as React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'
import Link from 'gatsby-link'

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
        <Title>
          <Link to="/">laulu.jallu.rodeo</Link>
        </Title>
        <Subtitle>Löydä just se teekkaribiisi</Subtitle>
      </CenteredSection>
    </Container>
  )
}
