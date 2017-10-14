import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './Card';
storiesOf('Card', module).add('with a paragraph', () => (
  <Card>
    <p>Hello World</p>
  </Card>
));
