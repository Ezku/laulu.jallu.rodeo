import * as React from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';

import { Navbar, NavbarBrand, NavbarItem, Container } from 'bloomer';
import { Column, Input, Control } from 'bloomer';
import * as Bloomer from 'bloomer';

import hasShadow from 'app/skin/hasShadow';
import { serif } from 'app/skin/fonts';

import AwesomeIcon from 'app/components/AwesomeIcon';
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

const HeroWithNavbar = () =>
  <glamorous.Div css={hasShadow}>
    <HeroColumns>
      <HeroLogoColumn />
      <HeroSearchColumn />
    </HeroColumns>
    <Navbar>
      <Container>
        <NavbarBrand>
          <NavbarItem className="is-tab is-active">Biisit</NavbarItem>
          <NavbarItem>Läsyt</NavbarItem>
        </NavbarBrand>
      </Container>
    </Navbar>
  </glamorous.Div>;

export default HeroWithNavbar;
