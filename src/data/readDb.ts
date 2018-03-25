import { songbook } from './parser'

const cleanup = (lines: string) =>
  lines
    .split('\n')
    .map(s => s.trim())
    .join('\n')

export default function readDb(db: string) {
  return songbook.db.tryParse(cleanup(db))
}
