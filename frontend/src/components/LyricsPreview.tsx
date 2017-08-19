import * as React from 'react';

import { Card, CardContent, CardFooter, Tag } from 'bloomer';
import glamorous from 'glamorous';

import { serifFamily, monospaceFamily } from '../theme/typography';

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

const Tags = glamorous.div({
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

export default () =>
  <AwesomeCard>
    <Lyrics>
      <Name>Koskenkorva</Name>
      <Verse>
        Nostakaamme malja,<br />
        koskenkorvaa on.<br />
        Väljähtyköön kalja,<br />
        mallas kelvoton<br />
        :,: Riemuella suo,<br />
        siispä veikko juo! :,:
      </Verse>

      <Verse>
        Kalja voimallansa,<br />
        meitä innostaa.<br />
        Koskenkorvan kanssa<br />
        mielet nostattaa.<br />
        :,: Lohdutusta tuo,<br />
        siispä veikko juo! :,:
      </Verse>
    </Lyrics>
    <CardFooter>
      <Tags>
        <AwesomeTag>#herkkää</AwesomeTag>
        <AwesomeTag>#lyyristä</AwesomeTag>
        <AwesomeTag>#koskenkorva</AwesomeTag>
      </Tags>
    </CardFooter>
  </AwesomeCard>;
