export type TableOfContentsLine = {
  ordinal: string;
  name: string;
};

export type SongHeading = {
  ordinal: string;
  name: string;
};

export type SongVerse = {
  verse: string[];
};

export type SongVerses = {
  verses: SongVerse[];
};

const types = {
  tableOfContents: {
    line: (ordinal: string, name: string): TableOfContentsLine => ({
      ordinal,
      name
    })
  },
  song: {
    heading: (ordinal: string, name: string) => ({
      ordinal,
      name
    }),
    verse: (lines: string[]): SongVerse => ({
      verse: lines
    }),
    verses: (verses: SongVerse[]): SongVerses => ({
      verses
    })
  }
};

export default types;
