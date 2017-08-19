import * as React from 'react';

import { Card, CardContent, CardFooter, Tag } from 'bloomer';
import glamorous from 'glamorous';

import { serifFamily, monospaceFamily } from 'app/theme/typography';

const Name = glamorous.h2({
  fontFamily: serifFamily,
  fontWeight: 900,
  fontSize: '24px',
  lineHeight: '1em',
  marginBottom: '16px'
});

const Lyrics = glamorous(CardContent)({
  whiteSpace: 'pre-wrap',
  fontFamily: serifFamily,
  fontSize: '16px',
  lineHeight: '1.618rem',
  fontWeight: 300
});

const Verse = glamorous.p({
  marginBottom: '2rem',
  ':last-child': {
    marginBottom: 0
  }
});

const AwesomeTags = glamorous.div({
  fontFamily: monospaceFamily,
  weight: '500',
  fontSize: '0.7rem'
});
const AwesomeTag = glamorous(Tag)({
  margin: '0.5rem 0 0.5rem 0.5rem'
});

const AwesomeCard = glamorous(Card)({
  borderRadius: '2px'
});

const Line = glamorous.div({
  paddingLeft: '1rem',
  textIndent: '-1rem',
  ':after': {
    content: '↲',
    fontSize: '0.618rem',
    marginLeft: '0.5rem'
  }
});

const AwesomeFooter = glamorous(CardFooter)({
  backgroundColor: '#fafbfc'
});

export default () =>
  <AwesomeCard>
    <Lyrics>
      <Name>Koskenkorva</Name>
      <Verse>
        <Line>Nostakaamme malja, koskenkorvaa on.</Line>
        <Line>Väljähtyköön kalja, mallas kelvoton</Line>
        <Line>:,: Riemuella suo, siispä veikko juo! :,:</Line>
      </Verse>
    </Lyrics>
    <AwesomeFooter>
      <AwesomeTags>
        <AwesomeTag>#herkkää</AwesomeTag>
        <AwesomeTag>#lyyristä</AwesomeTag>
        <AwesomeTag>#koskenkorva</AwesomeTag>
      </AwesomeTags>
    </AwesomeFooter>
  </AwesomeCard>;
