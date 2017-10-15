import glamorous from 'glamorous';

export const Box = glamorous.div({
  boxSizing: 'border-box'
});

export const Container = glamorous(Box)(
  {
    margin: '0 auto',
    position: 'relative'
  },
  {
    '@media screen and (min-width: 1024px)': {
      maxWidth: '960px',
      width: '960px'
    },
    '@media screen and (min-width: 1216px)': {
      maxWidth: '1152px',
      width: '1152px'
    }
  }
);

export const Column = glamorous(Box)(
  {
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
    padding: '0.75rem'
  },
  {
    '@media print, screen and (min-width: 769px)': {
      flex: 'none'
    }
  },
  ({ size }: { size: number }) => ({
    width: `${100 * (size / 12)}%`
  })
);

type ColumnProps = {
  centered: boolean;
  verticallyCentered: boolean;
  fullheight: boolean;
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
  (props: ColumnProps = { centered: false, verticallyCentered: false, fullheight: false }) => ({
    minHeight: props.fullheight ? '100vh' : 'inherit',
    'align-items': props.verticallyCentered ? 'center' : 'inherit',
    'justify-content': props.centered ? 'center' : 'inherit'
  })
);
