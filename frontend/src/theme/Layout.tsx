import * as React from 'react';
import glamorous from 'glamorous';
import { sansSerifFamily } from './typography';

export interface Props {
  Navigation: React.ComponentType;
}

const LayoutContainer = glamorous.div({
  fontFamily: sansSerifFamily
});

export default ({ Navigation }: Props) =>
  <LayoutContainer>
    <Navigation />
  </LayoutContainer>;
