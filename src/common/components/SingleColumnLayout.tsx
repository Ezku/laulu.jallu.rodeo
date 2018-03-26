import * as React from 'react'

import { Container, Section } from './Layout'
import { Column, Columns } from './Grid'

export type Props = {
  head: React.ReactNode
  body: React.ReactNode
}

export default function SingleColumnLayout(props: Props) {
  return (
    <div>
      <Container>
        <Section>
          <Columns centered>
            <Column size={6}>{props.head}</Column>
          </Columns>
        </Section>
      </Container>
      <Container>
        <Section>
          <Columns centered>
            <Column size={6}>{props.body}</Column>
          </Columns>
        </Section>
      </Container>
    </div>
  )
}
