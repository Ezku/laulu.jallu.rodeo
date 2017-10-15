import { CSSProperties } from 'glamorous';

export const gutterWidth = 32;

type Breakpoint = {
  content: number;
  withGutter: number;
};

const breakpoints = {
  wide: {
    content: 960,
    withGutter: 960 + gutterWidth * 2
  },
  extrawide: {
    content: 1152,
    withGutter: 1152 + gutterWidth * 2
  }
};

export default breakpoints;

const minWidthQuery = (pixels: number) => `@media screen and (min-width: ${pixels}px)`;

export const wide = (styles: (bp: Breakpoint) => CSSProperties) => ({
  [minWidthQuery(breakpoints.wide.withGutter)]: styles(breakpoints.wide)
});

export const extrawide = (styles: (bp: Breakpoint) => CSSProperties) => ({
  [minWidthQuery(breakpoints.extrawide.withGutter)]: styles(breakpoints.wide)
});
