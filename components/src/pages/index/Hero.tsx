import * as React from 'react';

import hasShadow from '../../skin/hasShadow';
import { Title, Subtitle } from '../../skin/titles';

import { Column } from '../../components/Grid';
import HeroColumns from '../../components/HeroColumns';

const Hero = () => (
  <div {...hasShadow}>
    <HeroColumns>
      <Column size={12}>
        <Title>laulu.jallu.rodeo</Title>
        <Subtitle>Salattujen laulujen kirja</Subtitle>
      </Column>
    </HeroColumns>
  </div>
);

export default Hero;
