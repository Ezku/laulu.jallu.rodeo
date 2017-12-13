import * as React from 'react';

import { Song } from '@laulu.jallu.rodeo/data/dist/types';

import slugify from '../utils/slugify';

export type Props = {
  songs: Song[];
  render: (s: Song) => React.ReactNode;
};
const LyricsCardList = (props: Props) => (
  <div>
    {props.songs.map(s => {
      const slug = slugify(s.name || '');
      return (
        <div key={slug}>
          {slug ? <a id={slug} /> : null}
          {props.render(s)}
        </div>
      );
    })}
  </div>
);

export default LyricsCardList;
