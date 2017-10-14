import { css } from 'glamor';

import { serif } from './fonts';
import glamorous from 'glamorous';

export const Title = glamorous.h1(
  css(serif, {
    margin: 0,
    fontWeight: 900,
    color: '#363636',
    fontSize: '2rem',
    lineHeight: 1.125,
    wordBreak: 'break-word'
  })
);

export const Subtitle = glamorous.h2(
  css(serif, {
    margin: 0,
    fontWeight: 300,
    letterSpacing: '-0.01em',
    wordSpacing: '0.01em',
    color: '#4a4a4a',
    fontSize: '1.25rem',
    lineHeight: 1.25
  })
);
