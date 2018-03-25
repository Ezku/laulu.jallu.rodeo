import * as React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

import { Container, Section } from '../common/components/Layout'

import songbook from '../data/songbook'
import { Song } from '../data/types'

import hasShadow from '../common/skin/hasShadow'
import { Title, Subtitle } from '../common/skin/titles'

import { Column, Columns } from '../common/components/Grid'
import HeroColumns from '../common/components/HeroColumns'
import SongIndex from '../common/components/SongIndex'
import SongsWithAnchors from '../common/components/SongsWithAnchors'
import LyricsPreviewCard from '../common/components/LyricsPreviewCard'

import { pathToLyrics } from './lyrics'

const BlockLink = glamorous(Link)({
  textDecoration: 'inherit'
})

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
              render={(song: Song, slug: string) => (
                <BlockLink to={pathToLyrics(slug)}>
                  <LyricsPreviewCard song={song} />
                </BlockLink>
              )}
            />
          </Column>
        </Columns>
      </Section>
    </Container>
  </div>
)
