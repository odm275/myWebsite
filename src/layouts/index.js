import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import favicon from './favicon.ico'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageHeight: null,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(e) {
    this.setState({ pageHeight: e.pageY })
  }

  render() {
    const { title } = this.props.data.site.siteMetadata
    let hideArrow
    if (this.state.pageHeight <= 0) {
      hideArrow = { display: 'none' }
    }
    return (
      <div className="layout" onScroll={this.handleScroll}>
        <div
          className="small-rectangle"
          css={{
            width: '100%',
            height: '2px',
            backgroundColor: '#f7df1e',
          }}
        />
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[{ rel: 'shortcut icon', href: favicon }]}
        />
        <FontAwesomeIcon
          icon={faAngleUp}
          size="2x"
          style={hideArrow}
          className="upArrow"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
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
          {this.props.children()}
        </article>
        <Footer />
      </div>
    )
  }
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
