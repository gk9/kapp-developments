import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import Headroom from 'react-headroom'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="KAPP Developments"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'robots', content: 'noindex, nofollow' },
      ]}
    />
    {/* <Headroom wrapperStyle={{ position: 'relative', zIndex: 100 }}> */}
      <Header />
    {/* </Headroom> */}

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '100px 1.0875rem 1.45rem',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
