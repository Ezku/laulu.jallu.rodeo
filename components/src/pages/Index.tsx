import * as React from 'react';

import { Container, Section } from '../components/Layout';

import songbook from '../data/songbook';

import hasShadow from '../skin/hasShadow';
import { Title, Subtitle } from '../skin/titles';

import { Column, Columns } from '../components/Grid';
import HeroColumns from '../components/HeroColumns';
import SongIndex from '../components/SongIndex';
import LyricsCardList from '../components/LyricsCardList';

export default () => (
  <div>
    <div {...hasShadow}>
      <HeroColumns>
        <Column size={12}>
          <Title>laulu.jallu.rodeo</Title>
          <Subtitle>Salattujen laulujen kirja</Subtitle>
        </Column>
      </HeroColumns>
    </div>
    <Container>
      <Section>
        <Columns>
          <Column size={5}>
            <SongIndex songs={songbook.tableOfContents} />
          </Column>
          <Column size={7}>
            <LyricsCardList songs={songbook.songs} />
          </Column>
        </Columns>
      </Section>
    </Container>
  </div>
);
