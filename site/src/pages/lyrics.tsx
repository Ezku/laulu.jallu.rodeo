import * as React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';

import { Container, Section } from '@laulu.jallu.rodeo/components/dist/components/Layout';

import songbook from '@laulu.jallu.rodeo/data/dist/songbook';
import { Song } from '@laulu.jallu.rodeo/data/dist/types';
import SongBySlug from '@laulu.jallu.rodeo/data/dist/SongBySlug';

import hasShadow from '@laulu.jallu.rodeo/components/dist/skin/hasShadow';
import { Title, Subtitle } from '@laulu.jallu.rodeo/components/dist/skin/titles';

import { Column, Columns } from '@laulu.jallu.rodeo/components/dist/components/Grid';
import HeroColumns from '@laulu.jallu.rodeo/components/dist/components/HeroColumns';
import SongIndex from '@laulu.jallu.rodeo/components/dist/components/SongIndex';
import LyricsCard from '@laulu.jallu.rodeo/components/dist/components/LyricsCard';

export default function Lyrics(props: { slug: string }) {
  return (
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
            <Column size={7}>
              <SongBySlug songs={songbook.songs} slug={props.slug}>
                {song => <LyricsCard song={song} />}
              </SongBySlug>
            </Column>
          </Columns>
        </Section>
      </Container>
    </div>
  );
}

export function pathToLyrics(slug: string) {
  return `/lyrics/?song=${slug}`;
}
