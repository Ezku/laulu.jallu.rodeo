import * as React from 'react'
import glamorous from 'glamorous'
import { css } from 'glamor'

import { sansSerif } from '../skin/fonts'
import { Box } from './Layout'

const Card = glamorous(Box)({
  borderRadius: '2px',
  marginBottom: '32px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1)',
  color: '#4a4a4a',
  maxWidth: '100%',
  position: 'relative'
})

const Content = glamorous(Box)(
  css(sansSerif, {
    whiteSpace: 'pre-wrap',
    fontSize: '16px',
    lineHeight: '1.618rem',
    fontWeight: 400,
    padding: '1.5rem'
  })
)

export default function(props: { children: React.ReactNode }) {
  return (
    <Card>
      <Content>{props.children}</Content>
    </Card>
  )
}
