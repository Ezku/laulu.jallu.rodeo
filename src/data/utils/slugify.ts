import * as unorm from 'unorm';

export default function slugify(s: string): string {
  return unorm
    .nfkd(s)
    .replace(/[^\x00-\x7F]/g, '')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^([-]*)([^-].*[^-])([-]*)$/g, '$2')
    .replace(/[-]{2,}/g, '-')
    .toLowerCase();
}
