import * as P from 'parsimmon';

import types from './types';

const newline = P.string('\n');
const textline = P.regex(/.+/);

const tocLine = P.seqMap(
  P.digits,
  P.string('.')
    .then(P.whitespace)
    .then(textline),
  types.tableOfContents.line
);

// tslint:disable-next-line:quotemark
const lines = P.sepBy(tocLine, newline);

export const tableOfContents = {
  line: tocLine,
  lines
};

const heading = P.seqMap(
  P.digits,
  P.string('.')
    .then(P.whitespace)
    .then(textline),
  types.song.heading
);

const description = P.string('(')
  .then(P.regex(/[^)]*/))
  .skip(P.string(')'));

const multipleNewlines = P.regex(/\n{2,}/);

const verse = P.sepBy(textline, newline);
const verses = P.sepBy(verse, multipleNewlines);

export const song = {
  heading,
  description,
  verse,
  verses
};

const songs = P.sepBy(
  P.seq(heading, description.atMost(1).skip(P.whitespace), verses),
  multipleNewlines
);

export const songbook = P.seqMap(
  P.optWhitespace.then(tableOfContents.lines).skip(P.whitespace),
  songs.skip(P.optWhitespace),
  (toc, s) => ({
    tableOfContents: toc,
    songs: s
  })
);
