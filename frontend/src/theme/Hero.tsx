import * as React from 'react';

import {
  Hero,
  HeroBody,
  Title,
  Subtitle,
  Columns,
  Column,
  Input,
  Control,
  Container
} from 'bloomer';
import glamorous from 'glamorous';

import AwesomeIcon from '../components/AwesomeIcon';

const Logotype = glamorous(Title)({
  fontFamily: 'Adelle',
  fontWeight: 900
});

const Slogan = glamorous(Subtitle)({
  fontFamily: 'Adelle',
  fontWeight: 300,
  letterSpacing: '-0.01em',
  wordSpacing: '0.01em'
});

const HeroLogoColumn = () =>
  <Column>
    <Logotype>laulu.jallu.rodeo</Logotype>
    <Slogan>Teekkarilaulusanoitusten mekka</Slogan>
  </Column>;

const HeroSearchColumn = () =>
  <Column>
    <Control hasIcons="right">
      <Input isSize="large" isColor="primary" placeholder="Etsi biisiä" />
      <AwesomeIcon isSize="large" isAlign="right" icon="search" />
    </Control>
  </Column>;

export default () =>
  <Hero>
    <HeroBody>
      <Container>
        <Columns isVCentered>
          <HeroLogoColumn />
          <HeroSearchColumn />
        </Columns>
      </Container>
    </HeroBody>
  </Hero>;
