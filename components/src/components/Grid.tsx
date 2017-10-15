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

export type ColumnProps = {
  size?: number;
  children: React.ReactNode;
};

export const Column: GlamorousComponent<ColumnProps, {}> = glamorous(Box)(
  extranarrow(() => ({
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    padding: '0.75rem'
  })),
  (props: ColumnProps) => {
    const size = props.size;
    if (size === undefined) {
      return {};
    }

    return narrow(() => ({
      flexBasis: `${100 * (size / 12)}%`,
      flexGrow: 0,
      flexShrink: 0
    }));
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
