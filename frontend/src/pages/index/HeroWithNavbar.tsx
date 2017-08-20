import * as React from 'react';

import { Navbar, NavbarBrand, NavbarItem, Container } from 'bloomer';
import { Column, Input, Control } from 'bloomer';
import glamorous from 'glamorous';

import hasShadow from 'app/skin/hasShadow';
import { Title, Subtitle } from 'app/theme/typography';

import AwesomeIcon from 'app/components/AwesomeIcon';
import HeroColumns from 'app/components/HeroColumns';

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
