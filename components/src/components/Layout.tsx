import * as React from 'react';
import glamorous, { GlamorousComponent } from 'glamorous';

import { Box, Container } from './Grid';

export const Section: GlamorousComponent<{}, {}> = glamorous(Box)({
  padding: '3rem 1.5rem'
});

export interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

export default ({ header, content }: Props) => (
  <Container>
    {header}
    <Section>{content}</Section>
  </Container>
);
