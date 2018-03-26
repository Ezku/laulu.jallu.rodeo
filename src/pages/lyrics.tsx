import * as React from 'react'

import Heading from '../common/components/Heading'
import SingleColumnLayout from '../common/components/SingleColumnLayout'

import songbook from '../data/songbook'
import SongBySlug from '../data/SongBySlug'
import { Song } from '../data/types'

import LyricsCard from '../common/components/LyricsCard'
import getSearchParam from '../common/utils/getSearchParam'

export default function Lyrics(props: { location: { search: string } }) {
  const slug = getSearchParam(props.location.search, 'song')
  return (
    <SingleColumnLayout
      head={<Heading />}
      body={
        <SongBySlug
          songs={songbook.songs}
          slug={slug}
          whenFound={(song: Song) => <LyricsCard song={song} />}
        />
      }
    />
  )
}

export function pathToLyrics(slug: string) {
  return `/lyrics/?song=${slug}`
}
