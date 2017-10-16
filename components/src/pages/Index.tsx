import * as React from 'react';

import slugify from 'slugify';

import { Container, Section } from '../components/Layout';

import LyricsCard from '../components/LyricsCard';

import songbook from '../data/songbook';

import hasShadow from '../skin/hasShadow';
import { Title, Subtitle } from '../skin/titles';

import { Column, Columns } from '../components/Grid';
import HeroColumns from '../components/HeroColumns';
import SongIndex from '../components/SongIndex';

const CompleteSongList = () => (
  <div>
    {songbook.songs.map((s, index) => (
      <div key={index}>
        {s.name ? <a id={slugify(s.name)} /> : null}
        <LyricsCard song={s} />
      </div>
    ))}
  </div>
);

export interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

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
            <CompleteSongList />
          </Column>
        </Columns>
      </Section>
    </Container>
  </div>
);
