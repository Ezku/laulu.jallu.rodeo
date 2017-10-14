import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import * as Bloomer from 'bloomer';

import { sansSerif } from 'app/skin/fonts';

const Card = glamorous(Bloomer.Card)({
  borderRadius: '2px',
  marginBottom: '32px'
});

const Content = glamorous(Bloomer.CardContent)(
  css(sansSerif, {
    whiteSpace: 'pre-wrap',
    fontSize: '16px',
    lineHeight: '1.618rem',
    fontWeight: 400
  })
);

export default function(props: { children: React.ReactNode }) {
  return (
    <Card>
      <Content>{props.children}</Content>
    </Card>
  );
}
