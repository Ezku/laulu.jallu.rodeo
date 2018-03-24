import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

import slugify from '../utils/slugify';
import { sansSerif } from '../skin/fonts';

const Ol = glamorous.ol(
  css(sansSerif, {
    fontSize: '1.271rem',
    lineHeight: '1.618rem',
    fontWeight: 700,
    listStylePosition: 'inside',
    margin: 0,
    marginRight: '1rem',
    fontVariantCaps: 'all-petite-caps',
    letterSpacing: '0.01em'
  })
);

const A = glamorous.a({
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  color: '#262626',
  ':hover': {
    borderBottomColor: 'inherit'
  }
});

export type Props = {
  songs: Array<{
    ordinal: string;
    name?: string;
  }>;
};

const SongIndex = (props: Props) => (
  <Ol>
    {props.songs.map(item => (
      <li key={item.ordinal}>
        {item.name ? <A href={'#' + slugify(item.name)}>{item.name}</A> : null}
      </li>
    ))}
  </Ol>
);

export default SongIndex;
