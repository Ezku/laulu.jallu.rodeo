import * as P from 'parsimmon';

export const tableOfContents = {
  line: P.seqMap(
    P.digits,
    P.string('.').then(P.whitespace).then(P.all),
    (ordinal, name) => ({
      ordinal,
      name
    })
  )
};
