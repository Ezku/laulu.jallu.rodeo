import * as React from 'react';

import { Container, Section } from '@laulu.jallu.rodeo/components/dist/components/Layout';

import songbook from '@laulu.jallu.rodeo/data/dist/songbook';

import hasShadow from '@laulu.jallu.rodeo/components/dist/skin/hasShadow';
import { Title, Subtitle } from '@laulu.jallu.rodeo/components/dist/skin/titles';

import { Column, Columns } from '@laulu.jallu.rodeo/components/dist/components/Grid';
import HeroColumns from '@laulu.jallu.rodeo/components/dist/components/HeroColumns';
import SongIndex from '@laulu.jallu.rodeo/components/dist/components/SongIndex';
import SongsWithAnchors from '@laulu.jallu.rodeo/components/dist/components/SongsWithAnchors';
import LyricsPreviewCard from '@laulu.jallu.rodeo/components/dist/components/LyricsPreviewCard';

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
            <SongsWithAnchors
              songs={songbook.songs}
              render={song => <LyricsPreviewCard song={song} />}
            />
          </Column>
        </Columns>
      </Section>
    </Container>
  </div>
);
