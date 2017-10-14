import * as React from 'react';

import { Hero, HeroBody, Columns } from 'bloomer';

import glamorous from 'glamorous';

import { Container } from './Grid';

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
        <Columns isVCentered>{children}</Columns>
      </Container>
    </HeroBody>
  </AwesomeHero>
);
