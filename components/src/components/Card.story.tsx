import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './Card';
import { Container, Columns, Column } from './Grid';

storiesOf('Card', module)
  .addDecorator(story => (
    <Container>
      <Columns fullheight verticallyCentered>
        <Column size={3}>
          {story()}
          {story()}
        </Column>
        <Column size={3}>{story()}</Column>
        <Column size={3}>
          {story()}
          {story()}
          {story()}
        </Column>
        <Column size={3}>{story()}</Column>
      </Columns>
    </Container>
  ))
  .add('with a paragraph', () => (
    <Card>
      <p>Hello World</p>
    </Card>
  ));
