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

const heading = P.seqMap(
  P.digits,
  P.string('.')
    .then(P.whitespace)
    .then(P.regex(/.+/)),
  (ordinal, name) => ({
    ordinal,
    name
  })
);

const description = P.string('(')
  .then(P.regex(/[^)]*/))
  .skip(P.string(')'));

const verse = P.sepBy(P.regex(/.+/), P.string('\n'));

export const song = {
  heading,
  description,
  verse
};
