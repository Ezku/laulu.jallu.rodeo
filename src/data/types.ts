export type TableOfContents = TableOfContentsLine[]

export type TableOfContentsLine = {
  ordinal: string
  name?: string
}

export type SongHeading = {
  ordinal: string
  name?: string
}

export type SongDescription = {
  description?: string
}

export type SongVerse = {
  verse: string[]
}

export type SongVerses = {
  verses: SongVerse[]
}

export type Song = {
  ordinal: string
  name?: string
  description?: string
  verses: SongVerse[]
}

export type Songbook = {
  tableOfContents: TableOfContents
  songs: Song[]
}

const types = {
  tableOfContents: {
    props: {
      line: (ordinal: string, name?: string): TableOfContentsLine => ({
        ordinal,
        name
      })
    },
    record: (lines: TableOfContentsLine[]) => lines
  },
  song: {
    props: {
      heading: (ordinal: string, name?: string): SongHeading => ({
        ordinal,
        name
      }),
      description: (description?: string): SongDescription => ({ description }),
      verse: (lines: string[]): SongVerse => ({
        verse: lines
      }),
      verses: (verses: SongVerse[]): SongVerses => ({
        verses
      })
    },
    record: (heading: SongHeading, description: SongDescription, verses: SongVerses) => ({
      ordinal: heading.ordinal,
      name: heading.name,
      description: description.description,
      verses: verses.verses
    })
  }
}

export default types
