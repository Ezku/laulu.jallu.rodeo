import * as React from "react";
import { Column, Columns } from "bloomer";
import glamorous from "glamorous";
import { css } from "glamor";
import slugify from "slugify";

import Layout from "app/components/Layout";
import { monospace } from "app/skin/fonts";

import Hero from "./index/Hero";
import LyricsPreview from "./index/LyricsPreview";

import songbook from "app/data/songbook";

const Ol = glamorous.ol(
  css(monospace, {
    fontSize: "1rem",
    lineHeight: "1.618rem",
    fontWeight: 700,
    listStylePosition: "outside",
    marginLeft: "3rem",
    marginRight: "1rem"
  })
);

const A = glamorous.a({
  display: "inline",
  textDecoration: "none"
});

export default () => (
  <Layout
    header={<Hero />}
    content={
      <Columns>
        <Column isSize={5}>
          <Ol>
            {songbook.tableOfContents.map(item => (
              <li key={item.ordinal}>
                {item.name ? <A href={"#" + slugify(item.name)}>{item.name}</A> : null}
              </li>
            ))}
          </Ol>
        </Column>
        <Column isSize={7}>
          {songbook.songs.map((s, index) => (
            <div key={index}>
              {s.name ? <a id={slugify(s.name)} /> : null}
              <LyricsPreview song={s} />
            </div>
          ))}
        </Column>
      </Columns>
    }
  />
);
