import * as React from 'react';
import glamorous from 'glamorous';
import { sansSerifFamily } from './typography';

import { Tile, Section, Container } from 'bloomer';

export interface Props {
  Navigation: React.ComponentType;
  Content: React.ComponentType;
}

const LayoutContainer = glamorous.div({
  fontFamily: sansSerifFamily
});

export default ({ Navigation, Content }: Props) =>
  <LayoutContainer>
    <Navigation />
    <Section>
      <Container>
        <Tile isAncestor>
          <Tile isParent>
            <Tile isChild>
              <Content />
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
  </LayoutContainer>;
