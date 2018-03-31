import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'

import Reset from '../utils/Reset'

import { Columns, Column } from './Grid'
import { Container, Section } from './Layout'
import BackToRoot from './BackToRoot'

storiesOf('BackToRoot', module)
  .addDecorator(story => (
    <Container>
      <Columns fullheight verticallyCentered centered>
        <Column size={4}>{story()}</Column>
      </Columns>
    </Container>
  ))
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => <BackToRoot />)
