import glamorous from 'glamorous';

export const Container = glamorous.div(
  {
    margin: '0 auto',
    position: 'relative'
  },
  {
    '@media screen and (min-width: 1024px)': {
      maxWidth: '960px',
      width: '960px'
    }
  }
);

export const VerticallyCenteredColumns = glamorous.div({
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
