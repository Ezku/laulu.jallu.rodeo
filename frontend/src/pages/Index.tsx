import * as React from 'react';

import { Navbar, NavbarBrand, NavbarItem, Container } from 'bloomer';

import Layout from '../theme/Layout';
import Hero from '../theme/Hero';

export default () =>
  <Layout
    Navigation={() =>
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
      </div>}
  />;
