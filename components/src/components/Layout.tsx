import * as React from 'react';
import glamorous, { GlamorousComponent } from 'glamorous';

import { extranarrow, narrow, normal, wide, extrawide } from '../skin/breakpoints';

export const Box: GlamorousComponent<{}, {}> = glamorous.div({
  boxSizing: 'border-box'
});

export const Container: GlamorousComponent<{}, {}> = glamorous(Box)(
  { margin: '0 auto', position: 'relative' },
  extranarrow(bp => ({
    padding: `0 ${bp.gutterWidth}px`
  })),
  narrow(bp => ({
    padding: `0 ${bp.gutterWidth}px`,
    maxWidth: bp.viewportWidth
  })),
  normal(bp => ({
    maxWidth: bp.viewportWidth,
    width: bp.viewportWidth
  })),
  wide(bp => ({
    maxWidth: bp.viewportWidth,
    width: bp.viewportWidth
  })),
  extrawide(bp => ({
    maxWidth: bp.viewportWidth,
    width: bp.viewportWidth
  }))
);

export const Section: GlamorousComponent<{}, {}> = glamorous(Box)({
  padding: '3rem 1.5rem'
});

export interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

export default ({ header, content }: Props) => (
  <Container>
    {header}
    <Section>{content}</Section>
  </Container>
);
