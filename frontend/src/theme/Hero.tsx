import * as React from 'react';

import {
  Hero,
  HeroBody,
  Columns,
  Column,
  Input,
  Control,
  Container
} from 'bloomer';

import glamorous from 'glamorous';

import { Title, Subtitle } from './typography';

import AwesomeIcon from '../components/AwesomeIcon';

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

const AwesomeHero = glamorous(Hero)({
  backgroundColor: '#FFF'
});

export default () =>
  <AwesomeHero>
    <HeroBody>
      <Container>
        <Columns isVCentered>
          <HeroLogoColumn />
          <HeroSearchColumn />
        </Columns>
      </Container>
    </HeroBody>
  </AwesomeHero>;
