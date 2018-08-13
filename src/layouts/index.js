import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => {
  return (
    <div className="layout">
      <div
        className="small-rectangle"
        css={{
          width: '100%',
          height: '2px',
          backgroundColor: '#f7df1e',
        }}
      />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <FontAwesomeIcon
        icon={faAngleUp}
        size="2x"
        style={{
          position: 'fixed',
          right: 0,
          bottom: '3rem',
        }}
      />

      <article
        className="App"
        css={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Header />
        {children()}
      </article>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
