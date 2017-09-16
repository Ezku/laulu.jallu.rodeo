import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import { Card, CardContent } from 'bloomer';

import { serif, sansSerif } from 'app/skin/fonts';
import { Song } from 'app/data/types';

const Name = glamorous.h2(
  css(serif, {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '1em',
    marginBottom: '0.618rem'
  })
);

const Header = glamorous.header({
  marginBottom: '16px'
});

const Description = glamorous.h3(
  css(serif, {
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '1.618rem',
    ':before': {
      content: '('
    },
    ':after': {
      content: ')'
    }
  })
);

const Lyrics = glamorous(CardContent)(
  css(sansSerif, {
    whiteSpace: 'pre-wrap',
    fontSize: '16px',
    lineHeight: '1.618rem',
    fontWeight: 300
  })
);

const Verse = glamorous.p({
  marginBottom: '2rem',
  ':last-child': {
    marginBottom: 0
  }
});

const AwesomeCard = glamorous(Card)({
  borderRadius: '2px',
  marginBottom: '32px'
});

const Line = glamorous.div({
  paddingLeft: '1rem',
  textIndent: '-1rem',
  ':after': {
    content: '↲',
    fontSize: '0.618rem',
    marginLeft: '0.5rem'
  }
});

export type Props = {
  song: Song;
};

export default (props: Props) => (
  <AwesomeCard>
    <Lyrics>
      <Header>
        <Name>
          {props.song.ordinal}. {props.song.name}
        </Name>
        {props.song.description ? <Description>{props.song.description}</Description> : null}
      </Header>
      {props.song.verses.map((verse, verseNumber) => (
        <Verse key={verseNumber}>
          {verse.verse.map((line, lineNumber) => <Line key={lineNumber}>{line}</Line>)}
        </Verse>
      ))}
    </Lyrics>
  </AwesomeCard>
);
