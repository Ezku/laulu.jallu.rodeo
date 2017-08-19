import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import { Tile, Section, Container } from 'bloomer';

import { monospace } from 'app/skin/fonts';

export interface Props {
  Navigation: React.ComponentType;
  Content: React.ComponentType;
}

const CategoryHeader = glamorous.h2(
  css(monospace, {
    fontSize: '1.618rem',
    lineHeight: '2rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.2rem',
    marginBottom: '2rem',
    borderBottom: '1px solid #ddd'
  })
);

export default ({ Navigation, Content }: Props) =>
  <div>
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
  </div>;
