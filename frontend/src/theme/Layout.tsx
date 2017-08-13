import * as React from 'react';
import * as WebFontLoader from 'webfontloader';
import glamorous from 'glamorous';

export interface Props {
  Navigation: React.ComponentType;
}

WebFontLoader.load({
  google: {
    families: ['Roboto:400,700', 'Roboto Mono:700']
  }
});

const LayoutContainer = glamorous.div({
  fontFamily: 'Roboto, sans-serif'
});

export default ({ Navigation }: Props) =>
  <LayoutContainer>
    <Navigation />
  </LayoutContainer>;
