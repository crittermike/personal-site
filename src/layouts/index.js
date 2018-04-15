import React from 'react'
import Link from 'gatsby-link'

import './index.css'

require("prismjs/themes/prism-tomorrow.css");

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1><Link to={'/'}>Mike Crittenden</Link></h1>
      )
    } else {
      header = (
        <h3><Link to={'/'}>← Home</Link></h3>
      )
    }
    return (
      <div className="container">
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
