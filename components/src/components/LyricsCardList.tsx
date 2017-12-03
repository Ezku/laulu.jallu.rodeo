import * as React from 'react';

import { Song } from '@laulu.jallu.rodeo/data/dist/types';

import slugify from '../utils/slugify';
import LyricsCard from '../components/LyricsCard';

export type Props = {
  songs: Song[];
};
const LyricsCardList = (props: Props) => (
  <div>
    {props.songs.map((s, index) => (
      <div key={index}>
        {s.name ? <a id={slugify(s.name)} /> : null}
        <LyricsCard song={s} />
      </div>
    ))}
  </div>
);

export default LyricsCardList;
