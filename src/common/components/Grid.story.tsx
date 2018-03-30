import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { Container } from './Layout'

import { Columns, Column } from './Grid'

storiesOf('Grid', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('1 column', () => (
    <Columns>
      <Column>column content</Column>
    </Columns>
  ))
