import * as React from 'react';

import { Column, Input, Control } from 'bloomer';

import { Title, Subtitle } from './typography';

import AwesomeIcon from 'app/components/AwesomeIcon';
import TwoColumnHero from 'app/components/TwoColumnHero';

const HeroLogoColumn = () =>
  <Column>
    <Title>laulu.jallu.rodeo</Title>
    <Subtitle>Teekkarilaulusanoitusten mekka</Subtitle>
  </Column>;

const HeroSearchColumn = () =>
  <Column>
    <Control hasIcons="right">
      <Input isSize="large" isColor="primary" placeholder="Etsi biisiä" />
      <AwesomeIcon isSize="large" isAlign="right" icon="search" />
    </Control>
  </Column>;

export default () =>
  <TwoColumnHero left={<HeroLogoColumn />} right={<HeroSearchColumn />} />;
