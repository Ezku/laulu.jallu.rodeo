import * as React from 'react';

import { Container, Columns, Column } from 'bloomer';

import { storiesOf } from '@storybook/react';

import LyricsCard from './LyricsCard';
import songbook from '../data/songbook';

function oneOf<V>(values: V[]): V {
  return values[Math.floor(Math.random() * values.length)];
}

storiesOf('LyricsCard', module)
  .addDecorator(story => (
    <Container style={{ minHeight: '100vh' }}>
      <Columns isCentered isVCentered style={{ minHeight: '100vh' }}>
        <Column isSize={6}>{story()}</Column>
      </Columns>
    </Container>
  ))
  .add('random song from the book', () => <LyricsCard song={oneOf(songbook.songs)} />);
