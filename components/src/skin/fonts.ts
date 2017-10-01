import * as WebFontLoader from "webfontloader";
import { css, StyleAttribute } from "glamor";

WebFontLoader.load({
  google: {
    families: ["Overpass Mono:300,700"]
  },
  typekit: {
    id: "cae3ngq"
  }
});

export const sansSerifFamily = [
  "acumin-pro",
  "BlinkMacSystemFont",
  "-apple-system",
  '"Segoe UI"',
  '"Oxygen"',
  '"Ubuntu"',
  '"Cantarell"',
  '"Fira Sans"',
  '"Droid Sans"',
  '"Helvetica Neue"',
  '"Helvetica"',
  '"Arial"',
  "sans-serif"
].join(", ");
export const serifFamily = "Adelle, serif";
export const monospaceFamily = "Overpass Mono, monospace";

export const sansSerif: StyleAttribute = css({
  fontFamily: sansSerifFamily
});

export const serif: StyleAttribute = css({ fontFamily: serifFamily });

export const monospace: StyleAttribute = css({ fontFamily: monospaceFamily });
