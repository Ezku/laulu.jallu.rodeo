import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'minireset.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>laulu.jallu.rodeo</title>
      <link rel="stylesheet" href="https://use.typekit.net/tjr4axo.css" />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
