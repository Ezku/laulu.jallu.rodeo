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

const popup = {
  transform: 'translateY(-3px)',
  boxShadow: [
    '0 3px 3px rgba(0,0,0,0.03)',
    '0 3px 6px rgba(0,0,0,0.05)',
    '0 3px 12px rgba(0,0,0,0.08)'
  ].join(', ')
}

const BlockLink = glamorous(Link)({
  display: 'block',
  textDecoration: 'inherit',
  transition: 'transform 100ms ease-out, box-shadow 100ms ease-out',
  boxShadow: 'none',
  borderRadius: '2px',
  transform: 'translateY(0)',
  ':hover': popup,
  ':focus': popup,
  ':active': popup
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
