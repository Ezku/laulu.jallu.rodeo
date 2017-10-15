import { CSSProperties } from 'glamorous';

type Breakpoint = {
  content: number;
  withGutter: number;
};

const makeBreakpoint = (contentWidth: number, gutterWidth: number = 32): Breakpoint => ({
  content: contentWidth,
  withGutter: contentWidth + gutterWidth * 2
});

const breakpoints = {
  extranarrow: makeBreakpoint(300, 10),
  narrow: makeBreakpoint(576),
  normal: makeBreakpoint(768),
  wide: makeBreakpoint(960),
  extrawide: makeBreakpoint(1152)
};

export default breakpoints;

const minWidthQuery = (pixels: number) => `@media screen and (min-width: ${pixels}px)`;

const makeBreakpointSelector = (bp: Breakpoint) => (styles: (bp: Breakpoint) => CSSProperties) => ({
  [minWidthQuery(bp.withGutter)]: styles(bp)
});

export const extranarrow = makeBreakpointSelector(breakpoints.extranarrow);
export const narrow = makeBreakpointSelector(breakpoints.narrow);
export const normal = makeBreakpointSelector(breakpoints.normal);
export const wide = makeBreakpointSelector(breakpoints.wide);
export const extrawide = makeBreakpointSelector(breakpoints.extrawide);
