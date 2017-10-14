import * as React from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';

import { Input, Control } from 'bloomer';

import hasShadow from '../../skin/hasShadow';
import { serif } from '../../skin/fonts';

import { Column } from '../../components/Grid';
import HeroColumns from '../../components/HeroColumns';

const Title = glamorous.h1(
  css(serif, {
    margin: 0,
    fontWeight: 900,
    color: '#363636',
    fontSize: '2rem',
    lineHeight: 1.125,
    wordBreak: 'break-word'
  })
);

const Subtitle = glamorous.h2(
  css(serif, {
    margin: 0,
    fontWeight: 300,
    letterSpacing: '-0.01em',
    wordSpacing: '0.01em',
    color: '#4a4a4a',
    fontSize: '1.25rem',
    lineHeight: 1.25
  })
);

const HeroLogoColumn = () => (
  <Column size={5}>
    <Title>laulu.jallu.rodeo</Title>
    <Subtitle>Salattujen laulujen kirja</Subtitle>
  </Column>
);

const HeroSearchColumn = () => (
  <Column size={7}>
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
