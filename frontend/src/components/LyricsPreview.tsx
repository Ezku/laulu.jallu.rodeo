import * as React from 'react';

import { Card, CardFooter, Tag } from 'bloomer';
import glamorous from 'glamorous';

import { monospaceFamily } from '../theme/typography';

const Lyrics = glamorous.div({
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
    <h2>Koskenkorva</h2>
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
