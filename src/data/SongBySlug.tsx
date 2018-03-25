import { Song } from './types'
import slugify from './utils/slugify'

export type Props = {
  songs: Song[]
  slug: string
  // FIXME: What is the type of a render prop?
  whenFound: (s: Song) => any
}

export default function SongBySlug(props: Props) {
  for (const song of props.songs) {
    if (song.name && slugify(song.name) === props.slug) {
      return props.whenFound(song)
    }
  }
  return null
}
