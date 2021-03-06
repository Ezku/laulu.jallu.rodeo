import * as React from 'react'

import { Song } from '../../data/types'
import slugify from '../../data/utils/slugify'

export type Props = {
  songs: Song[]
  render: (song: Song, slug: string) => React.ReactNode
}
const SongsWithAnchors = (props: Props) => (
  <div>
    {props.songs.map(s => {
      const slug = slugify(s.name || '')
      return (
        <div key={slug}>
          {slug ? <a id={slug} /> : null}
          {props.render(s, slug)}
        </div>
      )
    })}
  </div>
)

export default SongsWithAnchors
