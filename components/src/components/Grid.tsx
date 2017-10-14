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
