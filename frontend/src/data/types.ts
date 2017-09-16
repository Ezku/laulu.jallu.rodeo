export type TableOfContents = {
  tableOfContents: TableOfContentsLine[];
};

export type TableOfContentsLine = {
  ordinal: string;
  name: string;
};

export type SongHeading = {
  ordinal: string;
  name: string;
};

export type SongDescription = {
  description?: string;
};

export type SongVerse = {
  verse: string[];
};

export type SongVerses = {
  verses: SongVerse[];
};

const types = {
  tableOfContents: {
    props: {
      line: (ordinal: string, name: string): TableOfContentsLine => ({
        ordinal,
        name
      })
    },
    record: (lines: TableOfContentsLine[]) => ({
      tableOfContents: lines
    })
  },
  song: {
    props: {
      heading: (ordinal: string, name: string): SongHeading => ({
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
    }
  }
};

export default types;
