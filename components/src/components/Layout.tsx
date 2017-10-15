import * as React from 'react';
import glamorous from 'glamorous';

import { Box, Container } from './Grid';

const Section = glamorous(Box)({
  padding: '3rem 1.5rem'
});

export interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

export default ({ header, content }: Props) => (
  <div>
    {header}
    <Section>
      <Container>{content}</Container>
    </Section>
  </div>
);
