import React, { Component } from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './mobilenav'
import Nav from './nav'
//siteTitle is in props

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleOn: false,
      currentTab: '1',
    }

    this.onClickToggle = this.onClickToggle.bind(this)
    this.onClickTab = this.onClickTab.bind(this)
  }
  onClickToggle() {
    console.log('hey')
    this.setState({ toggleOn: !this.state.toggleOn })
  }
  onClickTab(id, e) {
    this.setState({ currentTab: id })
  }
  render() {
    return (
      <nav
        style={{
          display: 'flex',
          marginTop: '2rem',
          justifyContent: 'space-between',
        }}
      >
        <p>
          Oscar Mejia
          <br />
          <span style={{ color: '#c9c9c9' }}>Software Developer</span>
        </p>
        <MobileNav
          onClickToggle={this.onClickToggle}
          toggleOn={this.state.toggleOn}
          currentTab={this.state.currentTab}
          onClickTab={this.onClickTab}
        />
        <Nav currentTab={this.state.currentTab} onClick={this.onClickTab} />
      </nav>
    )
  }
}

export default Header
