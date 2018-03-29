import * as React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'

import { Title, Subtitle, Link } from '../skin/typography'

const Centered = glamorous.div({
  textAlign: 'center'
})

const whiteTextShadow = {
  textShadow: '0.1em 0.1em white, 0.05em 0.05em white, 0.025em 0.025em white, 0.075em 0.075em white'
}

export default function Heading() {
  return (
    <Centered {...css(whiteTextShadow)}>
      <Title>
        <Link to="/">laulu.jallu.rodeo</Link>
      </Title>
      <Subtitle>Löydä just se teekkaribiisi</Subtitle>
    </Centered>
  )
}
