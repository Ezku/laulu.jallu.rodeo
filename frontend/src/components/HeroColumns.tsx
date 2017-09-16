import * as React from 'react';

import { Hero, HeroBody, Columns, Container } from 'bloomer';

import glamorous from 'glamorous';

const AwesomeHero = glamorous(Hero)({
  backgroundColor: '#FFF'
});

type Props = {
  children: React.ReactElement<{}>[];
};

export default ({ children }: Props) =>
  <AwesomeHero>
    <HeroBody>
      <Container>
        <Columns isVCentered={true}>
          {children}
        </Columns>
      </Container>
    </HeroBody>
  </AwesomeHero>;
