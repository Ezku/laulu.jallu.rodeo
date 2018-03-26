import * as React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

import Heading from '../common/components/Heading'
import { Container, Section } from '../common/components/Layout'

import songbook from '../data/songbook'
import { Song } from '../data/types'

import { Column, Columns } from '../common/components/Grid'
import SongsWithAnchors from '../common/components/SongsWithAnchors'
import LyricsPreviewCard from '../common/components/LyricsPreviewCard'

import { pathToLyrics } from './lyrics'

const BlockLink = glamorous(Link)({
  textDecoration: 'inherit'
})

export default () => (
  <div>
    <Heading />
    <Container>
      <Section>
        <Columns centered>
          <Column size={6}>
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
