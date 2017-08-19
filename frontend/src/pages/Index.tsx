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
import { serifFamily } from '../theme/typography';

import Layout from '../theme/Layout';
import Hero from '../theme/Hero';

import LyricsPreview from '../components/LyricsPreview';

const HeroWithNavbar = glamorous(() =>
  <div>
    <Hero />
    <Navbar className="has-shadow">
      <Container>
        <NavbarBrand>
          <NavbarItem className="is-tab is-active">Biisit</NavbarItem>
          <NavbarItem>Läsyt</NavbarItem>
        </NavbarBrand>
      </Container>
    </Navbar>
  </div>
)({
  fontFamily: serifFamily
});

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
