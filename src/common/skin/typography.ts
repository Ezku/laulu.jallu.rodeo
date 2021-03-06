import { css } from 'glamor'

import { serif } from './fonts'
import glamorous, { GlamorousComponent } from 'glamorous'
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link'

import * as colors from './colors'

export const Title: GlamorousComponent<{}, {}> = glamorous.h1(
  css(serif, {
    margin: 0,
    fontWeight: 900,
    color: '#363636',
    fontSize: '2rem',
    lineHeight: 1.125,
    wordBreak: 'break-word'
  })
)

export const Subtitle: GlamorousComponent<{}, {}> = glamorous.h2(
  css(serif, {
    margin: 0,
    fontWeight: 300,
    letterSpacing: '-0.01em',
    wordSpacing: '0.01em',
    color: colors.plaintext,
    fontSize: '1.25rem',
    lineHeight: 1.25
  })
)

export const Link: GlamorousComponent<GatsbyLinkProps, {}> = glamorous(GatsbyLink)({
  color: 'inherit',
  ':hover': {
    color: 'inherit'
  },
  ':active': {
    color: '#00a8ff'
  }
})
