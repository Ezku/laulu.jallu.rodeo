import * as React from 'react';
import * as WebFontLoader from 'webfontloader';
import glamorous from 'glamorous';

export interface Props {
  Navigation: React.ComponentType;
}

WebFontLoader.load({
  typekit: {
    id: 'cae3ngq'
  }
});

const LayoutContainer = glamorous.div({
  fontFamily: 'Acumin Pro, sans-serif'
});

export default ({ Navigation }: Props) =>
  <LayoutContainer>
    <Navigation />
  </LayoutContainer>;
