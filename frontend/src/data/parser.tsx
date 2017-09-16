import * as P from 'parsimmon';

const line = P.seqMap(
  P.digits,
  P.string('.')
    .then(P.whitespace)
    .then(P.regex(/.+/)),
  (ordinal, name) => ({
    ordinal,
    name
  })
);

// tslint:disable-next-line:quotemark
const lines = P.sepBy(line, P.string('\n'));

export const tableOfContents = {
  line,
  lines
};
