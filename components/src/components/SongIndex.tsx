import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

import slugify from '../utils/slugify';
import { monospace } from '../skin/fonts';

const Ol = glamorous.ol(
  css(monospace, {
    fontSize: '1rem',
    lineHeight: '1.618rem',
    fontWeight: 700,
    listStylePosition: 'inside',
    margin: 0,
    marginRight: '1rem'
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
