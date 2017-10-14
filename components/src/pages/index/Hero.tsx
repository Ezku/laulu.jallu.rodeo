import * as React from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';

import { Column, Input, Control } from 'bloomer';
import * as Bloomer from 'bloomer';

import hasShadow from 'app/skin/hasShadow';
import { serif } from 'app/skin/fonts';

import HeroColumns from 'app/components/HeroColumns';

const Title = glamorous(Bloomer.Title)(
  css(serif, {
    fontWeight: 900
  })
);

const Subtitle = glamorous(Bloomer.Subtitle)(
  css(serif, {
    fontWeight: 300,
    letterSpacing: '-0.01em',
    wordSpacing: '0.01em'
  })
);

const HeroLogoColumn = () => (
  <Column isSize={5}>
    <Title>laulu.jallu.rodeo</Title>
    <Subtitle>Salattujen laulujen kirja</Subtitle>
  </Column>
);

const HeroSearchColumn = () => (
  <Column isSize={7}>
    <Control hasIcons="right" {...css({ display: 'none' })}>
      <Input isSize="large" isColor="primary" placeholder="Etsi sanoitusta" />
      {/* <AwesomeIcon isSize="large" isAlign="right" icon="search" /> */}
    </Control>
  </Column>
);

const Hero = () => (
  <div {...hasShadow}>
    <HeroColumns>
      <HeroLogoColumn />
      <HeroSearchColumn />
    </HeroColumns>
  </div>
);

export default Hero;
