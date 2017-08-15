import * as React from 'react';

import { Container, Columns, Column } from 'bloomer';

import { storiesOf } from '@storybook/react';

import LyricsPreview from './LyricsPreview';

storiesOf('LyricsPreview', module)
  .addDecorator(story =>
    <Container style={{ minHeight: '100vh' }}>
      <Columns isCentered isVCentered style={{ minHeight: '100vh' }}>
        <Column isSize={6}>
          {story()}
        </Column>
      </Columns>
    </Container>
  )
  .add('as anonymous', () => <LyricsPreview />);
