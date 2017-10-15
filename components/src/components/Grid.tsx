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
    maxWidth: bp.contentWidth,
    width: bp.contentWidth
  })),
  wide(bp => ({
    maxWidth: bp.contentWidth,
    width: bp.contentWidth
  })),
  extrawide(bp => ({ maxWidth: bp.contentWidth, width: bp.contentWidth }))
);

export type ColumnProps = {
  size?: number;
  children: React.ReactNode;
};

export const Column: GlamorousComponent<ColumnProps, {}> = glamorous(Box)(
  {
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    padding: '0.75rem'
  },
  (props: ColumnProps) =>
    !props.size
      ? {}
      : {
          width: `${100 * (props.size / 12)}%`
        }
);

export type ColumnsProps = {
  centered?: boolean;
  verticallyCentered?: boolean;
  fullheight?: boolean;
  children: React.ReactNode;
};

export const Columns: GlamorousComponent<ColumnsProps, {}> = glamorous(Box)(
  narrow(bp => ({
    display: 'flex',
    marginLeft: '-0.75rem',
    marginTop: '-0.75rem',
    marginRight: '-0.75rem',
    '&:last-child': {
      marginBottom: '-0.75rem'
    }
  })),
  (props: ColumnsProps) => ({
    minHeight: props.fullheight === true ? '100vh' : 'inherit',
    'align-items': props.verticallyCentered === true ? 'center' : 'inherit',
    'justify-content': props.centered === true ? 'center' : 'inherit'
  })
);
