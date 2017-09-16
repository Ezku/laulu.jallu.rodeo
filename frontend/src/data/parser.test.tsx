import { tableOfContents } from './parser';

describe('tableOfContents', () => {
  describe('line', () => {
    it('produces ordinal and name', () => {
      expect(tableOfContents.line.tryParse('1. name')).toEqual({ ordinal: '1', name: 'name' });
    });
  });
});
