import * as React from 'react';

import { Song } from './types';
import slugify from './utils/slugify';

export type Props = {
  songs: Song[];
  slug: string;
  children: (s: Song) => React.ReactNode;
};

export default function SongBySlug(props: Props) {
  for (const song of props.songs) {
    if (song.name && slugify(song.name) === props.slug) {
      return props.children(song);
    }
  }
  return null;
}
