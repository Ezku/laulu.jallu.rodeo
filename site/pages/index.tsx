import * as React from 'react';
import Head from 'next/head';

import scale from '@laulu.jallu.rodeo/components/dist/utils/scale';

export default () => (
  <div>
    <Head />
    hello{' '}
    {Array(12)
      .fill(null)
      .map((v, i) => i - 5)
      .map(scale)
      .join(', ')}
  </div>
);
