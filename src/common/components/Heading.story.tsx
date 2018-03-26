import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Reset from '../utils/Reset'

import { Columns, Column } from './Grid'
import { Container, Section } from './Layout'
import Heading from './Heading'

storiesOf('Heading', module).add('default', () => <Heading />)
