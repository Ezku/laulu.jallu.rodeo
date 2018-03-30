import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Columns, Column } from './Grid'
import { Container } from './Layout'

import FilterInput from './FilterInput'

storiesOf('FilterInput', module)
  .addDecorator(story => (
    <Container>
      <Columns fullheight verticallyCentered centered>
        <Column size={4}>{story()}</Column>
      </Columns>
    </Container>
  ))
  .add('empty value', () => <FilterInput value="" onValue={action('onValue')} />)
