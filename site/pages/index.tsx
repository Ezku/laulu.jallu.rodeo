import * as React from 'react';
import Head from 'next/head';

import scale from '@laulu.jallu.rodeo/components/dist/utils/scale';

import { Container } from '@laulu.jallu.rodeo/components/dist/components/Grid';
import { Title, Subtitle } from '@laulu.jallu.rodeo/components/dist/skin/titles';

import { rehydrate, css } from 'glamor';
import glamorous from 'glamorous';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate((window as any).__NEXT_DATA__.ids);
}

const scales = Array(12)
  .fill(null)
  .map((v, i) => {
    return `${scale(i - 5)}`;
  })
  .join(', ');

export default () => (
  <Container>
    <Title>Hello</Title>
    <Subtitle>{scales}</Subtitle>
  </Container>
);
