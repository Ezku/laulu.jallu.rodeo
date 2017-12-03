import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'minireset.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="laulu.jallu.rodeo"
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
