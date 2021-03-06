import * as P from 'parsimmon'

import types, { Songbook, TableOfContents, Song } from './types'

const newline = P.string('\n')
const textline = P.regex(/.+/)
const multipleNewlines = P.regex(/\n{2,}/)
const ordinal = P.digits.skip(P.string('.'))

export const utils = {
  newline,
  textline,
  multipleNewlines
}

const tocLine = P.alt(
  P.seqMap(ordinal, P.string(' ').then(textline), types.tableOfContents.props.line),
  ordinal.map(types.tableOfContents.props.line)
)

const tableOfContentsRecord = P.optWhitespace
  .then(P.sepBy1(tocLine, newline))
  .skip(P.optWhitespace)
  .map(types.tableOfContents.record)

export const tableOfContents = {
  props: {
    line: tocLine
  },
  record: tableOfContentsRecord
}

const heading = P.alt(
  P.seqMap(ordinal, P.string(' ').then(textline), types.song.props.heading),
  ordinal.map(types.song.props.heading)
)

const description = P.string('(')
  .then(P.regex(/[^)]+/))
  .skip(P.string(')'))
  .atMost(1)
  .map(descriptions => {
    return types.song.props.description(descriptions[0])
  })

const verse = P.sepBy(textline, newline.notFollowedBy(heading)).map(types.song.props.verse)
const verses = P.sepBy(verse, multipleNewlines.notFollowedBy(heading)).map(parsedVerses => {
  return {
    verses: parsedVerses
  }
})

export const song = {
  props: {
    heading,
    description,
    verse,
    verses
  },
  record: P.seqMap(
    heading.skip(newline),
    description.skip(P.optWhitespace),
    verses,
    types.song.record
  )
}

const songBreak = P.alt(multipleNewlines, newline)
const songs = P.optWhitespace.then(P.sepBy(song.record, songBreak)).skip(P.optWhitespace)

export const db = P.seqMap(
  tableOfContents.record,
  songs,
  (toc: TableOfContents, s: Song[]): Songbook => ({
    tableOfContents: toc,
    songs: s
  })
)

export const songbook = {
  songs,
  db
}
