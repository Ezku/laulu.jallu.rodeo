import glamorous from 'glamorous';
import * as Bloomer from 'bloomer';

import * as WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto Mono:500']
  },
  typekit: {
    id: 'cae3ngq'
  }
});

export const sansSerifFamily =
  'acumin-pro, BlinkMacSystemFont, -apple-system, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif';
export const serifFamily = 'Adelle, serif';
export const monospaceFamily = 'Roboto Mono, monospace';

export const Title = glamorous(Bloomer.Title)({
  fontFamily: serifFamily,
  fontWeight: 900
});

export const Subtitle = glamorous(Bloomer.Subtitle)({
  fontFamily: serifFamily,
  fontWeight: 300,
  letterSpacing: '-0.01em',
  wordSpacing: '0.01em'
});
