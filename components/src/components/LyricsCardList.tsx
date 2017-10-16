import * as React from 'react';

import slugify from '../utils/slugify';
import LyricsCard from '../components/LyricsCard';
import { Song } from '../data/types';

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
