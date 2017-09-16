import db from './laulukirja';

import { tableOfContents, song, songbook } from './parser';
import types from './types';

describe('tableOfContents', () => {
  describe('line', () => {
    it('produces ordinal and name', () => {
      expect(tableOfContents.props.line.tryParse('1. name')).toEqual({
        ordinal: '1',
        name: 'name'
      });
    });
  });

  describe('lines', () => {
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
      expect(song.heading.tryParse('1. name')).toEqual({ ordinal: '1', name: 'name' });
    });
  });

  describe('description', () => {
    it('parsers a parenthesized bit of text', () => {
      expect(song.description.tryParse('(description)')).toEqual('description');
      expect(song.description.tryParse(`(${['multi', 'line', 'description'].join('\n')})`)).toEqual(
        ['multi', 'line', 'description'].join('\n')
      );
    });
  });

  describe('verse', () => {
    it('parses lines of text', () => {
      expect(song.verse.tryParse('this was a triumph')).toEqual(
        types.song.verse(['this was a triumph'])
      );
      expect(song.verse.tryParse(['i am making a note here:', 'huge success'].join('\n'))).toEqual(
        types.song.verse(['i am making a note here:', 'huge success'])
      );
    });
  });

  describe('verses', () => {
    it('parses verses separated by two or more newlines', () => {
      expect(song.verses.tryParse('this was a triumph')).toEqual(
        types.song.verses([types.song.verse(['this was a triumph'])])
      );
      expect(song.verses.tryParse(['i am making a note here:', 'huge success'].join('\n'))).toEqual(
        types.song.verses([types.song.verse(['i am making a note here:', 'huge success'])])
      );
      expect(song.verses.tryParse(['verse one', 'verse two'].join('\n\n'))).toEqual(
        types.song.verses([types.song.verse(['verse one']), types.song.verse(['verse two'])])
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
