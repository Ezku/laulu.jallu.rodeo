import * as React from 'react';

import { Hero, HeroBody } from 'bloomer';

import glamorous from 'glamorous';

import { Container, VerticallyCenteredColumns } from './Grid';

const AwesomeHero = glamorous(Hero)({
  backgroundColor: '#FFF'
});

type Props = {
  children: React.ReactElement<{}>[];
};

export default ({ children }: Props) => (
  <AwesomeHero>
    <HeroBody>
      <Container>
        <VerticallyCenteredColumns>{children}</VerticallyCenteredColumns>
      </Container>
    </HeroBody>
  </AwesomeHero>
);
