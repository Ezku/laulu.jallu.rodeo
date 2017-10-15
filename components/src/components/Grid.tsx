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
  (props: ColumnsProps = { centered: false, verticallyCentered: false, fullheight: false }) => ({
    minHeight: props.fullheight ? '100vh' : 'inherit',
    'align-items': props.verticallyCentered ? 'center' : 'inherit',
    'justify-content': props.centered ? 'center' : 'inherit'
  })
);
