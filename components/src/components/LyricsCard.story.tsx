import * as React from 'react';

import { Columns, Column } from './Grid';
import { Container, Section } from './Layout';

import { storiesOf } from '@storybook/react';

import LyricsCard from './LyricsCard';
import songbook from '@laulu.jallu.rodeo/data/dist/songbook';

function oneOf<V>(values: V[]): V {
  return values[Math.floor(Math.random() * values.length)];
}

storiesOf('LyricsCard', module)
  .addDecorator(story => (
    <Section>
      <Container>
        <Columns centered verticallyCentered fullheight>
          <Column size={6}>{story()}</Column>
        </Columns>
      </Container>
    </Section>
  ))
  .add('random song from the book', () => <LyricsCard song={oneOf(songbook.songs)} />);
