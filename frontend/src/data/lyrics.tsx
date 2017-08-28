import * as P from 'parsimmon';

import laulukirja from './laulukirja';

type Lyric = {};

const ParseLyric = P.seq(P.regexp(/^[1-9][0-9]*\. .*$/));
const Parser: P.Parser<[string]> = P.lazy(() => P.seq(ParseLyric, Parser));

const lyrics: Array<Lyric> = Parser.tryParse(laulukirja);

export default lyrics;
