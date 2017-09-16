import * as P from 'parsimmon';

import types from './types';

const newline = P.string('\n');
const textline = P.regex(/.+/).map(s => s.trim());

export const utils = {
  newline,
  textline
};

const tocLine = P.seqMap(
  P.digits,
  P.string('.')
    .then(P.whitespace)
    .then(textline),
  types.tableOfContents.props.line
);

const tableOfContentsRecord = P.sepBy(tocLine, newline).map(types.tableOfContents.record);

export const tableOfContents = {
  props: {
    line: tocLine
  },
  record: tableOfContentsRecord
};

const heading = P.seqMap(
  P.digits,
  P.string('.')
    .then(P.whitespace)
    .then(textline),
  types.song.props.heading
);

const description = P.string('(')
  .then(P.regex(/[^)]*/))
  .skip(P.string(')'))
  .atMost(1)
  .skip(P.optWhitespace)
  .map(descriptions => types.song.props.description(descriptions[0]));

const multipleNewlines = P.regex(/\n{2,}/);

const verse = P.sepBy(textline, newline).map(types.song.props.verse);
const verses = P.sepBy(verse, multipleNewlines).map(parsedVerses => {
  return {
    verses: parsedVerses
  };
});

export const song = {
  props: {
    heading,
    description,
    verse,
    verses
  },
  record: P.seqMap(heading, description.skip(P.optWhitespace), verses, types.song.record)
};

const songs = P.sepBy(song.record, multipleNewlines);

export const db = P.seqMap(
  P.optWhitespace.then(tableOfContents.record).skip(P.whitespace),
  songs.skip(P.optWhitespace),
  (toc, s) => ({
    tableOfContents: toc.tableOfContents,
    songs: s
  })
);

export const songbook = {
  songs,
  db
};
