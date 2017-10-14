import * as WebFontLoader from 'webfontloader';
import { css, StyleAttribute } from 'glamor';

WebFontLoader.load({
  google: {
    families: ['Overpass Mono:300,700', 'Overpass:400']
  },
  typekit: {
    id: 'cae3ngq'
  }
});

export const sansSerifFamily = [
  'Overpass',
  'BlinkMacSystemFont',
  '-apple-system',
  '"Segoe UI"',
  '"Oxygen"',
  '"Ubuntu"',
  '"Cantarell"',
  '"Fira Sans"',
  '"Droid Sans"',
  '"Helvetica Neue"',
  '"Helvetica"',
  '"Arial"',
  'sans-serif'
].join(', ');
export const serifFamily = 'Adelle, serif';
export const monospaceFamily = 'Overpass Mono, monospace';

const readability = {
  '-moz-osx-font-smoothing': 'grayscale',
  '-webkit-font-smoothing': 'antialiased',
  'text-rendering': 'optimizeLegibility',
  'text-size-adjust': '100%'
};

export const sansSerif: StyleAttribute = css(readability, {
  fontFamily: sansSerifFamily
});

export const serif: StyleAttribute = css(readability, { fontFamily: serifFamily });

export const monospace: StyleAttribute = css(readability, { fontFamily: monospaceFamily });
