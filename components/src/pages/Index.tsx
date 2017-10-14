import * as React from 'react';
import { Column, Columns } from 'bloomer';
import glamorous from 'glamorous';
import { css } from 'glamor';
import slugify from 'slugify';

import Layout from 'app/components/Layout';
import { monospace } from 'app/skin/fonts';

import Hero from './index/Hero';
import LyricsPreview from './index/LyricsPreview';

import songbook from 'app/data/songbook';

const Ol = glamorous.ol(
  css(monospace, {
    fontSize: '1rem',
    lineHeight: '1.618rem',
    fontWeight: 700,
    listStylePosition: 'outside',
    marginLeft: '3rem',
    marginRight: '1rem'
  })
);

const A = glamorous.a({
  display: 'inline-block',
  textDecoration: 'none',
  zIndex: 1,
  position: 'relative',
  borderBottom: '1px solid transparent',
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

export default () => (
  <Layout
    header={<Hero />}
    content={
      <Columns>
        <Column isSize={5}>
          <Ol>
            {songbook.tableOfContents.map(item => (
              <li key={item.ordinal}>
                {item.name ? <A href={'#' + slugify(item.name)}>{item.name}</A> : null}
              </li>
            ))}
          </Ol>
        </Column>
        <Column isSize={7}>
          {songbook.songs.map((s, index) => (
            <div key={index}>
              {s.name ? <a id={slugify(s.name)} /> : null}
              <LyricsPreview song={s} />
            </div>
          ))}
        </Column>
      </Columns>
    }
  />
);
