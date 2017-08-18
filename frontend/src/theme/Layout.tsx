import * as React from 'react';
import glamorous from 'glamorous';
import { sansSerifFamily, monospaceFamily } from './typography';

import { Tile, Section, Container } from 'bloomer';

export interface Props {
  Navigation: React.ComponentType;
  Content: React.ComponentType;
}

const LayoutContainer = glamorous.div({
  fontFamily: sansSerifFamily
});

const CategoryHeader = glamorous.h2({
  fontFamily: monospaceFamily,
  fontSize: '1.618rem',
  lineHeight: '2rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  marginBottom: '2rem',
  borderBottom: '1px solid #ddd'
});

export default ({ Navigation, Content }: Props) =>
  <LayoutContainer>
    <Navigation />
    <Section>
      <Container>
        <CategoryHeader>Biisit / #parhaat</CategoryHeader>
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
