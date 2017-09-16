import { utils, tableOfContents, song, songbook } from './parser';
import types from './types';

describe('utils', () => {
  describe('textline', () => {
    it('accepts a line of text', () => {
      expect(utils.textline.tryParse('foo bar')).toEqual('foo bar');
    });
  });

  describe('multipleNewlines', () => {
    it('accepts more than 1 newline in a row', () => {
      expect(utils.multipleNewlines.tryParse('\n\n\n')).toEqual('\n\n\n');
    });
  });
});

describe('tableOfContents', () => {
  describe('line', () => {
    it('produces ordinal and name', () => {
      expect(tableOfContents.props.line.tryParse('1. name')).toEqual({
        ordinal: '1',
        name: 'name'
      });
    });
  });

  describe('record', () => {
    it('produces a list of ordinals and names', () => {
      // tslint:disable-next-line:quotemark
      const lines = ['1. foo', '2. bar', '3. qux'].join('\n');
      expect(tableOfContents.record.tryParse(lines)).toEqual(
        types.tableOfContents.record([
          { ordinal: '1', name: 'foo' },
          { ordinal: '2', name: 'bar' },
          { ordinal: '3', name: 'qux' }
        ])
      );
    });
  });
});

describe('song', () => {
  describe('heading', () => {
    it('produces ordinal and name', () => {
      expect(song.props.heading.tryParse('1. name')).toEqual({ ordinal: '1', name: 'name' });
    });
    it('handles empty name', () => {
      expect(song.props.heading.tryParse('13.')).toEqual({ ordinal: '13', name: undefined });
    });
  });

  describe('description', () => {
    it('parsers a parenthesized bit of text', () => {
      expect(song.props.description.tryParse('(2001 vintage)')).toEqual(
        types.song.props.description('2001 vintage')
      );
      expect(
        song.props.description.tryParse(`(${['multi', 'line', 'description'].join('\n')})`)
      ).toEqual(types.song.props.description(['multi', 'line', 'description'].join('\n')));
    });
  });

  describe('verse', () => {
    it('parses lines of text', () => {
      expect(song.props.verse.tryParse('this was a triumph')).toEqual(
        types.song.props.verse(['this was a triumph'])
      );
      expect(
        song.props.verse.tryParse(['i am making a note here:', 'huge success'].join('\n'))
      ).toEqual(types.song.props.verse(['i am making a note here:', 'huge success']));
    });
    it('does not accept a line that would be an acceptable heading', () => {
      expect(
        song.props.verse.parse(['last line in song', '2. next song name'].join('\n')).status
      ).toBeFalsy();
    });
  });

  describe('verses', () => {
    it('parses verses separated by two or more newlines', () => {
      expect(song.props.verses.tryParse('this was a triumph')).toEqual(
        types.song.props.verses([types.song.props.verse(['this was a triumph'])])
      );
      expect(
        song.props.verses.tryParse(['i am making a note here:', 'huge success'].join('\n'))
      ).toEqual(
        types.song.props.verses([
          types.song.props.verse(['i am making a note here:', 'huge success'])
        ])
      );
      expect(song.props.verses.tryParse(['verse one', '', 'verse two'].join('\n'))).toEqual(
        types.song.props.verses([
          types.song.props.verse(['verse one']),
          types.song.props.verse(['verse two'])
        ])
      );
    });
    it('does not accept a verse that would be an acceptable heading', () => {
      expect(
        song.props.verses.parse(['last line of previous song', '', '2. next song name'].join('\n'))
          .status
      ).toBeFalsy();
    });
  });

  describe('record', () => {
    it('successfully parses heading and verses', () => {
      expect(song.record.tryParse(['1. name', 'verse one'].join('\n'))).toEqual(
        types.song.record(
          types.song.props.heading('1', 'name'),
          types.song.props.description(),
          types.song.props.verses([types.song.props.verse(['verse one'])])
        )
      );
    });
    it('successfully parses heading, description and verses', () => {
      expect(song.record.tryParse(['1. name', '(description)', 'verse one'].join('\n'))).toEqual(
        types.song.record(
          types.song.props.heading('1', 'name'),
          types.song.props.description('description'),
          types.song.props.verses([types.song.props.verse(['verse one'])])
        )
      );
    });
  });
});

const mockDb = `
1. One

1. One
(It's good)

This is verse one
`;

const songsWithoutWhitespace = `
1. Koskenkorva
Kalja voimallansa meitä innostaa,
Koskenkorvan kanssa mielet nostattaa.
2. Ylioppilasriemua
On elomme häipyvä muistoista pois
ken mennyttä kauankaan muistella vois?
`;
describe('songbook', () => {
  describe('songs', () => {
    it('should handle songs without whitespace in between', () => {
      expect(songbook.songs.tryParse(songsWithoutWhitespace)).toEqual([
        types.song.record(
          types.song.props.heading('1', 'Koskenkorva'),
          types.song.props.description(),
          types.song.props.verses([
            types.song.props.verse([
              'Kalja voimallansa meitä innostaa,',
              'Koskenkorvan kanssa mielet nostattaa.'
            ])
          ])
        ),
        types.song.record(
          types.song.props.heading('2', 'Ylioppilasriemua'),
          types.song.props.description(),
          types.song.props.verses([
            types.song.props.verse([
              'On elomme häipyvä muistoista pois',
              'ken mennyttä kauankaan muistella vois?'
            ])
          ])
        )
      ]);
    });
  });

  describe('db', () => {
    it('successfully parses songbook db', () => {
      expect(songbook.db.tryParse(mockDb)).toEqual({
        tableOfContents: [types.tableOfContents.props.line('1', 'One')],
        songs: [
          types.song.record(
            types.song.props.heading('1', 'One'),
            // tslint:disable-next-line:quotemark
            types.song.props.description("It's good"),
            types.song.props.verses([types.song.props.verse(['This is verse one'])])
          )
        ]
      });
    });
  });
});
