import * as React from 'react';

import { Container, Columns, Column } from 'bloomer';

import { storiesOf } from '@storybook/react';

import LyricsPreview from './LyricsPreview';
import songbook from '../../data/songbook';

function oneOf<V>(values: V[]): V {
  return values[Math.floor(Math.random() * values.length)];
}

storiesOf('LyricsPreview', module)
  .addDecorator(story => (
    <Container style={{ minHeight: '100vh' }}>
      <Columns isCentered isVCentered style={{ minHeight: '100vh' }}>
        <Column isSize={6}>{story()}</Column>
      </Columns>
    </Container>
  ))
  .add('random song from the book', () => <LyricsPreview song={oneOf(songbook.songs)} />);
