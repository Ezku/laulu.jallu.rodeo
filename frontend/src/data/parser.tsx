import * as P from 'parsimmon';

import types from './types';

const line = P.seqMap(
  P.digits,
  P.string('.')
    .then(P.whitespace)
    .then(P.regex(/.+/)),
  types.tableOfContents.line
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
  types.song.heading
);

const description = P.string('(')
  .then(P.regex(/[^)]*/))
  .skip(P.string(')'));

const verse = P.sepBy(P.regex(/.+/), P.string('\n'));
const verses = P.sepBy(verse, P.regex(/\n{2,}/));

export const song = {
  heading,
  description,
  verse,
  verses
};
