import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'

import Reset from '../utils/Reset'

import { Columns, Column } from './Grid'
import { Container, Section } from './Layout'
import Heading from './Heading'

storiesOf('Heading', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => <Heading />)
