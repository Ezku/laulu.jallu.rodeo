import * as React from 'react';
import glamorous from 'glamorous';

import { Box, Container, Columns } from './Grid';

const Hero = glamorous(Box)({
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#FFF'
});

const HeroBody = glamorous(Box)({
  padding: '3rem 1.5rem',
  flexGrow: 1,
  flexShrink: 0
});

export default (props: { children: React.ReactNode }) => (
  <Hero>
    <HeroBody>
      <Container>
        <Columns verticallyCentered>{props.children}</Columns>
      </Container>
    </HeroBody>
  </Hero>
);
