/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { rehydrate } from 'glamor'
import WebFontLoader from 'webfontloader'

exports.onClientEntry = () => {
  if (window._glamor) {
    rehydrate(window._glamor)
  }

  WebFontLoader.load({
    typekit: {
      id: 'tjr4axo'
    }
  })
}
