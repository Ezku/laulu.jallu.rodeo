import * as React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Container,
  Columns,
  Column
} from 'bloomer';

import glamorous from 'glamorous';
import { serif } from 'app/skin/fonts';

import Layout from 'app/theme/Layout';
import Hero from 'app/theme/Hero';

import LyricsPreview from 'app/components/LyricsPreview';

const HeroWithNavbar = () =>
  <glamorous.Div css={serif}>
    <Hero />
    <Navbar className="has-shadow">
      <Container>
        <NavbarBrand>
          <NavbarItem className="is-tab is-active">Biisit</NavbarItem>
          <NavbarItem>Läsyt</NavbarItem>
        </NavbarBrand>
      </Container>
    </Navbar>
  </glamorous.Div>;

export default () =>
  <Layout
    Navigation={HeroWithNavbar}
    Content={() =>
      <Columns>
        <Column isSize={4}>
          <LyricsPreview />
        </Column>
      </Columns>}
  />;
