import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import slugify from 'slugify';

import { monospace } from '../skin/fonts';

const Ol = glamorous.ol(
  css(monospace, {
    fontSize: '1rem',
    lineHeight: '1.618rem',
    fontWeight: 700,
    listStylePosition: 'outside',
    margin: 0
  })
);

const A = glamorous.a({
  display: 'inline-block',
  textDecoration: 'none',
  zIndex: 1,
  position: 'relative',
  borderBottom: '1px solid transparent',
  color: '#262626',
  ':hover': {
    borderBottomColor: 'inherit',
    ':after': {
      top: 0
    }
  },
  ':after': {
    zIndex: -1,
    content: ' ',
    backgroundColor: '#fff882',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '100%',
    transitionProperty: 'top',
    transitionDuration: '0.160s',
    transitionTimingFunction: 'ease-in'
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
