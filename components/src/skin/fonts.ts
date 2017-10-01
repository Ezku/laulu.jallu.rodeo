import * as WebFontLoader from 'webfontloader';
import { css } from 'glamor';

WebFontLoader.load({
  google: {
    families: ['Roboto Mono:500']
  },
  typekit: {
    id: 'cae3ngq'
  }
});

export const sansSerifFamily = [
  'acumin-pro',
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
export const monospaceFamily = 'Roboto Mono, monospace';

export const sansSerif = css({
  fontFamily: sansSerifFamily
});

export const serif = css({
  fontFamily: serifFamily
});

export const monospace = css({
  fontFamily: monospaceFamily
});
