import * as React from 'react';

import { Columns, Column } from 'bloomer';

import Layout from 'app/theme/Layout';

import HeroWithNavbar from './index/HeroWithNavbar';
import LyricsPreview from './index/LyricsPreview';

export default () =>
  <Layout
    Navigation={HeroWithNavbar}
    Content={() =>
      <Columns>
        <Column isSize={4}>
          <LyricsPreview />
        </Column>
      </Columns>}
  />;
