import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './Card';
import { Container, Columns, Column } from './Grid';

storiesOf('Card', module)
  .addDecorator(story => (
    <Container>
      <Columns fullheight verticallyCentered>
        <Column>
          {story()}
          {story()}
        </Column>
        <Column>{story()}</Column>
        <Column>
          {story()}
          {story()}
          {story()}
        </Column>
        <Column>{story()}</Column>
      </Columns>
    </Container>
  ))
  .add('with a paragraph', () => (
    <Card>
      <p>Hello World</p>
    </Card>
  ));
