import React, { Component } from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './mobilenav'
import Nav from './nav'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleOn: false,
    }

    this.onClickToggle = this.onClickToggle.bind(this)
  }
  onClickToggle() {
    this.setState({ toggleOn: !this.state.toggleOn })
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
        />
        <Nav />
      </nav>
    )
  }
}

export default Header
