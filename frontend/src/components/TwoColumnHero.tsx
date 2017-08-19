import * as React from 'react';

import { Hero, HeroBody, Columns, Column, Container } from 'bloomer';

import glamorous from 'glamorous';

const AwesomeHero = glamorous(Hero)({
  backgroundColor: '#FFF'
});

type Props = {
  left: React.ReactElement<any>;
  right: React.ReactElement<any>;
};

export default ({ left, right }: Props) =>
  <AwesomeHero>
    <HeroBody>
      <Container>
        <Columns isVCentered>
          <Column>
            {left}
          </Column>
          <Column>
            {right}
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </AwesomeHero>;
