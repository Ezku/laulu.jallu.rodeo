import * as React from 'react';

import { Card, CardHeader, CardContent, CardFooter, Tag } from 'bloomer';
import glamorous from 'glamorous';

import { serifFamily, monospaceFamily } from '../theme/typography';

const Name = glamorous.h2({
  fontFamily: serifFamily,
  fontWeight: 900,
  fontSize: '1.618rem',
  lineHeight: '2rem',
  padding: '0.5rem'
});

const Lyrics = glamorous(CardContent)({
  whiteSpace: 'pre'
});

const Tags = glamorous.div({
  fontFamily: monospaceFamily,
  weight: '500',
  fontSize: '0.7rem'
});
const AwesomeTag = glamorous(Tag)({
  margin: '0.5rem 0 0.5rem 0.5rem'
});

export default () =>
  <Card>
    <CardHeader>
      <Name>Koskenkorva</Name>
    </CardHeader>
    <Lyrics>
      <p>
        Nostakaamme malja, koskenkorvaa on<br />
        väljähtyköön kalja mallas kelvoton.<br />
        ;.; Riemuella suo, siispä veikko juo. ;.;`
      </p>
    </Lyrics>
    <CardFooter>
      <Tags>
        <AwesomeTag>#herkkää</AwesomeTag>
        <AwesomeTag>#lyyristä</AwesomeTag>
        <AwesomeTag>#koskenkorva</AwesomeTag>
      </Tags>
    </CardFooter>
  </Card>;
