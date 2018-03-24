export default function slugify(s: string): string {
  return s.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase();
}
