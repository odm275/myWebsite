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
    this.setState({ toggleOn: !this.state.toggleOn })
  }
  onClickTab(id, e) {
    this.setState({ currentTab: id })
  }
  render() {
    console.log(this.state.currentTab)

    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>
          Oscar Mejia
          <br />
          Software Developer
        </p>
        <MobileNav
          onClickToggle={this.onClickToggle}
          toggleOn={this.state.toggleOn}
          currentTab={this.state.currentTab}
          onClick={this.onClickTab}
        />
        <Nav currentTab={this.state.currentTab} onClick={this.onClickTab} />
      </nav>
    )
  }
}

export default Header
