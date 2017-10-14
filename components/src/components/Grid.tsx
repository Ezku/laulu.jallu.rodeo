import glamorous from 'glamorous';

const Box = glamorous.div({
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

export const VerticallyCenteredColumns = glamorous(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '-0.75rem',
  marginTop: '-0.75rem',
  marginRight: '-0.75rem',
  '& .column': {
    flex: 'none',
    display: 'block',
    padding: '0.75rem'
  },
  '&:last-child': {
    marginBottom: '-0.75rem'
  }
});
