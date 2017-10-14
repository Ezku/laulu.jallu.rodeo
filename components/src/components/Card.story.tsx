import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './Card';
import { Container, VerticallyCenteredColumns, Column } from './Grid';

storiesOf('Card', module)
  .addDecorator(story => (
    <Container>
      <VerticallyCenteredColumns style={{ minHeight: '100vh' }}>
        <Column size={3}>{story()}</Column>
        <Column size={3}>{story()}</Column>
        <Column size={3}>{story()}</Column>
        <Column size={3}>{story()}</Column>
      </VerticallyCenteredColumns>
    </Container>
  ))
  .add('with a paragraph', () => (
    <Card>
      <p>Hello World</p>
    </Card>
  ));
