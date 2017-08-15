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
import glamorous from 'glamorous';

import Layout from '../theme/Layout';

const Logotype = glamorous(Title)({
  fontFamily: 'Adelle',
  fontWeight: 900
});

const Slogan = glamorous(Subtitle)({
  fontFamily: 'Adelle',
  fontWeight: 300,
  letterSpacing: '-0.01em',
  wordSpacing: '0.01em'
})

export default () =>
  <Layout
    Navigation={() =>
      <div>
        <Hero>
          <HeroBody>
            <Container>
              <Columns isVCentered>
                <Column>
                  <Logotype>laulu.jallu.rodeo</Logotype>
                  <Slogan>
                    Teekkarilaulusanoitusten mekka
                  </Slogan>
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
