import db from './laulukirja';

import { utils, tableOfContents, song, songbook } from './parser';
import types from './types';

describe('utils', () => {
  describe('textline', () => {
    it('accepts a line of text', () => {
      expect(utils.textline.tryParse('foo bar')).toEqual('foo bar');
    });
    it('trims line', () => {
      expect(utils.textline.tryParse(' <-- whitespace --> ')).toEqual('<-- whitespace -->');
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

    it('does not mind extra whitespace', () => {
      expect(song.props.verse.tryParse([' foo ', ' bar', 'qux '].join('\n'))).toEqual(
        types.song.props.verse(['foo', 'bar', 'qux'])
      );
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
      expect(song.props.verses.tryParse(['verse one', 'verse two'].join('\n\n'))).toEqual(
        types.song.props.verses([
          types.song.props.verse(['verse one']),
          types.song.props.verse(['verse two'])
        ])
      );
    });
  });

  describe('record', () => {
    it('successfully parses, heading and verses', () => {
      expect(song.record.tryParse(['1. name', 'verse one'].join('\n'))).toEqual(
        types.song.record(
          types.song.props.heading('1', 'name'),
          types.song.props.description(),
          types.song.props.verses([types.song.props.verse(['verse one'])])
        )
      );
    });
  });
});

describe('songbook', () => {
  describe('db', () => {
    it('successfully parses songbook db', () => {
      expect(songbook.db.tryParse(db)).toBeDefined();
    });
  });
});
