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
