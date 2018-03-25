import * as unorm from 'unorm';

export default function slugify(s: string): string {
  return unorm
    .nfkd(s) // Decompose unicode characters (ä becomes a + diaeresis)
    .replace(/[^\x00-\x7F]/g, '') // Remove non-ascii characters
    .replace(/[^A-Za-z0-9]+/g, '-') // Replace non-alnum characters with dashes
    .replace(/^([-]*)([^-].*[^-])([-]*)$/g, '$2') // Trim dashes
    .replace(/[-]{2,}/g, '-') // Remove repeating dashes
    .toLowerCase();
}
