import { CSSProperties } from 'glamorous';

export const gutterWidth = 32;

type Breakpoint = {
  content: number;
  withGutter: number;
};

const makeBreakpoint = (contentWidth: number): Breakpoint => ({
  content: contentWidth,
  withGutter: contentWidth + gutterWidth * 2
});

const breakpoints = {
  wide: makeBreakpoint(960),
  extrawide: makeBreakpoint(1152)
};

export default breakpoints;

const minWidthQuery = (pixels: number) => `@media screen and (min-width: ${pixels}px)`;

export const wide = (styles: (bp: Breakpoint) => CSSProperties) => ({
  [minWidthQuery(breakpoints.wide.withGutter)]: styles(breakpoints.wide)
});

export const extrawide = (styles: (bp: Breakpoint) => CSSProperties) => ({
  [minWidthQuery(breakpoints.extrawide.withGutter)]: styles(breakpoints.wide)
});
