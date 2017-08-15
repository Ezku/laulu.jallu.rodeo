import * as React from 'react';

import { Card } from 'bloomer';
import glamorous from 'glamorous';

const Lyrics = glamorous.div({
  whiteSpace: 'pre'
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
  </Card>;
