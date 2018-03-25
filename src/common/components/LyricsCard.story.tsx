import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Reset from '../utils/Reset'

import { Columns, Column } from './Grid'
import { Container, Section } from './Layout'
import LyricsCard from './LyricsCard'

import songbook from '../../data/songbook'

function oneOf<V>(values: V[]): V {
  return values[Math.floor(Math.random() * values.length)]
}

storiesOf('LyricsCard', module)
  .addDecorator(story => (
    <Reset>
      <Section>
        <Container>
          <Columns centered verticallyCentered fullheight>
            <Column size={6}>{story()}</Column>
          </Columns>
        </Container>
      </Section>
    </Reset>
  ))
  .add('random song from the book', () => <LyricsCard song={oneOf(songbook.songs)} />)
