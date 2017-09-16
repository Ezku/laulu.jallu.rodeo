import * as P from 'parsimmon';

export const tableOfContents = {
  line: P.seqMap(
    P.digits,
    P.string('.').then(P.whitespace).then(P.regex(/.+/)),
    (ordinal, name) => ({
      ordinal,
      name
    })
  ),
  lines: P.lazy(() =>
    // tslint:disable-next-line:quotemark
    P.sepBy(tableOfContents.line, P.string("\n"))
  )
};
