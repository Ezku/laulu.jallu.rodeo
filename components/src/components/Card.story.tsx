import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './Card';
import { Container, VerticallyCenteredColumns } from './Grid';

storiesOf('Card', module)
  .addDecorator(story => (
    <Container>
      <VerticallyCenteredColumns>{story()}</VerticallyCenteredColumns>
    </Container>
  ))
  .add('with a paragraph', () => (
    <Card>
      <p>Hello World</p>
    </Card>
  ));
