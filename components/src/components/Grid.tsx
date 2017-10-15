import glamorous from 'glamorous';

import { wide, extrawide } from '../skin/breakpoints';

export const Box = glamorous.div({
  boxSizing: 'border-box'
});

export const Container = glamorous(Box)(
  {
    margin: '0 auto',
    position: 'relative'
  },
  wide(bp => ({
    maxWidth: bp.withGutter,
    width: bp.withGutter
  })),
  extrawide(bp => ({
    maxWidth: bp.withGutter,
    width: bp.withGutter
  }))
);

type ColumnProps = {
  size?: number;
  children: React.ReactNode;
};

export const Column = glamorous(Box)(
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
          width: `${100 * (props.size / 12)}%`,
          '@media print, screen and (min-width: 769px)': {
            flex: 'none'
          }
        }
);

type ColumnsProps = {
  centered?: boolean;
  verticallyCentered?: boolean;
  fullheight?: boolean;
  children: React.ReactNode;
};

export const Columns = glamorous(Box)(
  {
    display: 'flex',
    marginLeft: '-0.75rem',
    marginTop: '-0.75rem',
    marginRight: '-0.75rem',
    '&:last-child': {
      marginBottom: '-0.75rem'
    }
  },
  (props: ColumnsProps) => ({
    minHeight: props.fullheight ? '100vh' : 'inherit',
    'align-items': props.verticallyCentered ? 'center' : 'inherit',
    'justify-content': props.centered ? 'center' : 'inherit'
  })
);
