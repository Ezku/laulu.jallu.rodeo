import * as React from 'react'
import glamorous from 'glamorous'

import { narrow } from '../skin/breakpoints'

import { Columns } from './Grid'
import { Box, Container } from './Layout'

const Hero = glamorous(Box)({
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#FFF'
})

const HeroBody = glamorous(Box)(
  {
    flexGrow: 1,
    flexShrink: 0,
    padding: '1.5rem 0.5rem'
  },
  narrow(() => ({
    padding: '3rem 1.5rem'
  }))
)

export default (props: { children: React.ReactNode }) => (
  <Hero>
    <HeroBody>
      <Container>
        <Columns verticallyCentered>{props.children}</Columns>
      </Container>
    </HeroBody>
  </Hero>
)
