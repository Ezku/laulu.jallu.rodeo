import * as React from 'react'
import glamorous from 'glamorous'

import { Link } from '../skin/typography'
import { sansSerif } from '../skin/fonts'
import * as colors from '../skin/colors'

import BackIcon from './backToRoot/BackIcon'

const Centered = glamorous.div({
  textAlign: 'center'
})

const BlockLink = glamorous(Link)(
  {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '0.2rem',
    borderBottom: '0.2rem solid',
    color: colors.plaintext
  },
  sansSerif
)

export default function BackToRoot() {
  return (
    <Centered>
      <BlockLink to="/">
        <BackIcon />&nbsp;&nbsp;Biisilistaan
      </BlockLink>
    </Centered>
  )
}
