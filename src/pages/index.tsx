import * as React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

import Heading from '../common/components/Heading'
import SingleColumnLayout from '../common/components/SingleColumnLayout'

import songbook from '../data/songbook'
import { Song } from '../data/types'

import SongsWithAnchors from '../common/components/SongsWithAnchors'
import LyricsPreviewCard from '../common/components/LyricsPreviewCard'

import { pathToLyrics } from './lyrics'

const BlockLink = glamorous(Link)({
  textDecoration: 'inherit'
})

export default () => (
  <SingleColumnLayout
    head={<Heading />}
    body={
      <SongsWithAnchors
        songs={songbook.songs}
        render={(song: Song, slug: string) => (
          <BlockLink to={pathToLyrics(slug)}>
            <LyricsPreviewCard song={song} />
          </BlockLink>
        )}
      />
    }
  />
)
