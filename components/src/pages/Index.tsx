import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import slugify from 'slugify';

import { Container, Section } from '../components/Layout';
import { monospace } from '../skin/fonts';

import LyricsCard from '../components/LyricsCard';

import songbook from '../data/songbook';

import hasShadow from '../skin/hasShadow';
import { Title, Subtitle } from '../skin/titles';

import { Column, Columns } from '../components/Grid';
import HeroColumns from '../components/HeroColumns';

const Ol = glamorous.ol(
  css(monospace, {
    fontSize: '1rem',
    lineHeight: '1.618rem',
    fontWeight: 700,
    listStylePosition: 'outside',
    marginLeft: '3rem',
    marginRight: '1rem'
  })
);

const A = glamorous.a({
  display: 'inline-block',
  textDecoration: 'none',
  zIndex: 1,
  position: 'relative',
  borderBottom: '1px solid transparent',
  ':hover': {
    borderBottomColor: 'inherit',
    ':after': {
      top: 0
    }
  },
  ':after': {
    zIndex: -1,
    content: ' ',
    backgroundColor: '#fff882',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '100%',
    transitionProperty: 'top',
    transitionDuration: '0.160s',
    transitionTimingFunction: 'ease-in'
  }
});

const SongIndex = () => (
  <Ol>
    {songbook.tableOfContents.map(item => (
      <li key={item.ordinal}>
        {item.name ? <A href={'#' + slugify(item.name)}>{item.name}</A> : null}
      </li>
    ))}
  </Ol>
);

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
            <SongIndex />
          </Column>
          <Column size={7}>
            <CompleteSongList />
          </Column>
        </Columns>
      </Section>
    </Container>
  </div>
);
