import * as React from 'react';
import { Column, Columns } from 'bloomer';
import glamorous from 'glamorous';
import { css } from 'glamor';

import Layout from 'app/components/Layout';
import { monospace } from 'app/skin/fonts';

import Hero from './index/Hero';
import LyricsPreview from './index/LyricsPreview';

import songbook from 'app/data/songbook';

const Ol = glamorous.ol(
  css(monospace, {
    fontSize: '1rem',
    lineHeight: '1.618rem',
    fontWeight: 500,
    listStylePosition: 'inside'
  })
);

const A = glamorous.a({
  borderBottom: '1px solid',
  display: 'inline-block'
});

export default () => (
  <Layout
    header={<Hero />}
    content={
      <Columns>
        <Column isSize={5}>
          <Ol>
            <li>
              <A href="#koskenkorva">Koskenkorva</A>
            </li>
          </Ol>
        </Column>
        <Column isSize={7}>
          {songbook.songs.map((s, index) => (
            <div>
              <LyricsPreview song={s} key={index} />
              <pre>{JSON.stringify(s, null, 2)}</pre>
            </div>
          ))}
        </Column>
      </Columns>
    }
  />
);
