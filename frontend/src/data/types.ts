export type TableOfContentsLine = {
  ordinal: string;
  name: string;
};

export type SongHeading = {
  ordinal: string;
  name: string;
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
    })
  }
};

export default types;
