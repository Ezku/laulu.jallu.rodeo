import * as React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'

import { Title, Subtitle, Link } from '../skin/typography'

const Centered = glamorous.div({
  textAlign: 'center'
})

const whiteTextShadow = {
  textShadow: '1px 1px white'
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
