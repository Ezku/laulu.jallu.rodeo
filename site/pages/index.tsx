import * as React from 'react';
import Head from 'next/head';

import scale from '@laulu.jallu.rodeo/components/dist/utils/scale';

import { Container } from '@laulu.jallu.rodeo/components/dist/components/Grid';
import { Title, Subtitle } from '@laulu.jallu.rodeo/components/dist/skin/titles';

export default () => (
  <Container>
    <Head />
    <Title>Hello</Title>
    <Subtitle>
      {Array(12)
        .fill(null)
        .map((v, i) => i - 5)
        .map(scale)
        .join(', ')}
    </Subtitle>
  </Container>
);
