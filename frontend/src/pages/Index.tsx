import * as React from 'react';
import glamorous from 'glamorous';
import { Hero, HeroBody, Title, Container } from 'bloomer';

import Layout from '../theme/Layout';

const AmazingHero = glamorous(Hero)({
  background: 'linear-gradient(to right bottom, #000046, #1cb5e0)'
});

export default () =>
  <Layout
    Navigation={() =>
      <div>
        <AmazingHero className="is-primary">
          <HeroBody>
            <Container>
              <Title>laulu.jallu.rodeo</Title>
            </Container>
          </HeroBody>
        </AmazingHero>
      </div>}
  />;
