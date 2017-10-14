import * as React from 'react';

import hasShadow from '../../skin/hasShadow';
import { Title, Subtitle } from '../../skin/titles';

import { Column } from '../../components/Grid';
import HeroColumns from '../../components/HeroColumns';

const HeroLogoColumn = () => (
  <Column size={5}>
    <Title>laulu.jallu.rodeo</Title>
    <Subtitle>Salattujen laulujen kirja</Subtitle>
  </Column>
);

const Hero = () => (
  <div {...hasShadow}>
    <HeroColumns>
      <HeroLogoColumn />
    </HeroColumns>
  </div>
);

export default Hero;
