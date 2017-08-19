import * as React from 'react';

import { Navbar, NavbarBrand, NavbarItem, Container } from 'bloomer';

import glamorous from 'glamorous';
import Hero from 'app/theme/Hero';

import { serif } from 'app/skin/fonts';

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

export default HeroWithNavbar;
