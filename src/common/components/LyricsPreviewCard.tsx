import * as React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

import { Song } from '../../data/types';

import { serif } from '../skin/fonts';
import Card from '../components/Card';

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

const Verse = glamorous.p();

const Line = glamorous.div({
  paddingLeft: '1rem',
  textIndent: '-1rem'
});

const More = glamorous.span(
  css(serif, {
    fontSize: '24px'
  })
);

export type Props = {
  song: Song;
};

const MAX_VERSES = 1;
const MAX_LINES = 4;

export default (props: Props) => (
  <Card>
    <Header>
      <Name>
        {props.song.ordinal}. {props.song.name}
      </Name>
    </Header>
    {props.song.verses
      .slice(0, MAX_VERSES)
      .map((verse, verseNumber) => (
        <Verse key={verseNumber}>
          {verse.verse
            .slice(0, MAX_LINES)
            .map((line, lineNumber) => <Line key={lineNumber}>{line}</Line>)}
        </Verse>
      ))}
    {(props.song.verses.length > MAX_VERSES || props.song.verses[0].verse.length > MAX_LINES) && (
      <More>&hellip;</More>
    )}
  </Card>
);
