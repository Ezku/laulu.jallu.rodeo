import * as React from 'react';

import { Navbar, NavbarBrand, NavbarItem, Container } from 'bloomer';
import { Column, Input, Control } from 'bloomer';

import glamorous from 'glamorous';
import { css } from 'glamor';

import { serif, sansSerif } from 'app/skin/fonts';
import hasShadow from 'app/skin/hasShadow';
import { Title, Subtitle } from 'app/theme/typography';

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

const HeroWithNavbar = () =>
  <glamorous.Div css={css(serif, hasShadow)}>
    <TwoColumnHero left={<HeroLogoColumn />} right={<HeroSearchColumn />} />
    <Navbar {...sansSerif}>
      <Container>
        <NavbarBrand>
          <NavbarItem className="is-tab is-active">Biisit</NavbarItem>
          <NavbarItem>Läsyt</NavbarItem>
        </NavbarBrand>
      </Container>
    </Navbar>
  </glamorous.Div>;

export default HeroWithNavbar;
