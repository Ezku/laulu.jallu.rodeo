import * as React from 'react';
import { Column, Columns } from 'bloomer';
import glamorous from 'glamorous';
import { css } from 'glamor';

import Layout from 'app/components/Layout';
import { monospace } from 'app/skin/fonts';

import HeroWithNavbar from './index/HeroWithNavbar';
import LyricsPreview from './index/LyricsPreview';

const CategoryHeader = glamorous.h2(
  css(monospace, {
    fontSize: '1.618rem',
    lineHeight: '2rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    marginBottom: '2rem',
    borderBottom: '1px solid #ddd'
  })
);

export default () =>
  <Layout
    header={<HeroWithNavbar />}
    content={
      <div>
        <CategoryHeader>Biisit / #parhaat</CategoryHeader>
        <Columns>
          <Column isSize={4}>
            <LyricsPreview />
          </Column>
        </Columns>
      </div>
    }
  />;
