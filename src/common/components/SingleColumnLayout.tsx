import * as React from 'react'
import { css } from 'glamor'

import { narrow } from '../skin/breakpoints'

import { Container, Section } from './Layout'
import { Column, Columns } from './Grid'

export type Props = {
  head: React.ReactNode
  body: React.ReactNode
  footer?: React.ReactNode
}

const minimumColumnWidth = narrow(() => ({
  minWidth: '30rem'
}))

export default function SingleColumnLayout(props: Props) {
  return (
    <div>
      <Container>
        <Section>
          <Columns centered>
            <Column size={6}>{props.head}</Column>
          </Columns>
        </Section>
        <Section>
          <Columns centered>
            <Column size={6} {...css(minimumColumnWidth)}>
              {props.body}
            </Column>
          </Columns>
        </Section>
        {props.footer && (
          <Section>
            <Columns centered>
              <Column size={6} {...css(minimumColumnWidth)}>
                {props.footer}
              </Column>
            </Columns>
          </Section>
        )}
      </Container>
    </div>
  )
}
