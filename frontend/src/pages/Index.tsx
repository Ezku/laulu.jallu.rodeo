import * as React from 'react';
import 'font-awesome/css/font-awesome.css';

import {
  Hero,
  HeroBody,
  Title,
  Subtitle,
  Columns,
  Column,
  Input,
  Control,
  Icon,
  Navbar,
  NavbarBrand,
  NavbarItem,
  Container
} from 'bloomer';

import Layout from '../theme/Layout';

export default () =>
  <Layout
    Navigation={() =>
      <div>
        <Hero className="is-primary">
          <HeroBody>
            <Container>
              <Columns isVCentered>
                <Column>
                  <Title>laulu.jallu.rodeo</Title>
                  <Subtitle>
                    Löydä biisit, tsekkaa läsyt, jaa omat sanoitukset
                  </Subtitle>
                </Column>
                <Column>
                  <Control hasIcons="right">
                    <Input
                      isSize="large"
                      isColor="primary"
                      placeholder="Etsi biisiä"
                    />
                    <Icon isSize="large" isAlign="right" icon="search" />
                  </Control>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
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
