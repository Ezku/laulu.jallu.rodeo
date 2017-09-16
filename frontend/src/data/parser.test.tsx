import { tableOfContents } from './parser';

describe('tableOfContents', () => {
  describe('line', () => {
    it('produces ordinal and name', () => {
      expect(tableOfContents.line.tryParse('1. name')).toEqual({ ordinal: '1', name: 'name' });
    });
  });

  describe('lines', () => {
    it('produces a list of ordinals and names', () => {
      // tslint:disable-next-line:quotemark
      const lines = ['1. foo', '2. bar', '3. qux'].join('\n');
      expect(tableOfContents.lines.tryParse(lines)).toEqual([
        { ordinal: '1', name: 'foo' },
        { ordinal: '2', name: 'bar' },
        { ordinal: '3', name: 'qux' }
      ]);
    });
  });
});
