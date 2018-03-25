import * as React from 'react'

import Heading from '../common/components/Heading'
import { Container, Section } from '../common/components/Layout'

import songbook from '../data/songbook'
import SongBySlug from '../data/SongBySlug'
import { Song } from '../data/types'

import { Column, Columns } from '../common/components/Grid'
import LyricsCard from '../common/components/LyricsCard'
import getSearchParam from '../common/utils/getSearchParam'

export default function Lyrics(props: { location: { search: string } }) {
  const slug = getSearchParam(props.location.search, 'song')
  return (
    <div>
      <Heading />
      <Container>
        <Section>
          <Columns>
            <Column size={7}>
              <SongBySlug
                songs={songbook.songs}
                slug={slug}
                whenFound={(song: Song) => <LyricsCard song={song} />}
              />
            </Column>
          </Columns>
        </Section>
      </Container>
    </div>
  )
}

export function pathToLyrics(slug: string) {
  return `/lyrics/?song=${slug}`
}
