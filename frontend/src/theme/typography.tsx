import glamorous from 'glamorous';
import { css } from 'glamor';
import { serif } from 'app/skin/fonts';

import * as Bloomer from 'bloomer';

// export const sansSerifFamily =
//   'acumin-pro, BlinkMacSystemFont, -apple-system, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif';
// export const serifFamily = 'Adelle, serif';
// export const monospaceFamily = 'Roboto Mono, monospace';

export const Title = glamorous(Bloomer.Title)(
  css(serif, {
    fontWeight: 900
  })
);

export const Subtitle = glamorous(Bloomer.Subtitle)(
  css(serif, {
    fontWeight: 300,
    letterSpacing: '-0.01em',
    wordSpacing: '0.01em'
  })
);
