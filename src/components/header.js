import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './navbar-module.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './mobilenav'
//siteTitle is in props

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleOn: false,
      currentTab: '1',
    }

    this.onClickToggle = this.onClickToggle.bind(this)
  }
  onClickToggle() {
    console.log('eyy')
    this.setState({ toggleOn: !this.state.toggleOn })
  }
  onClickTab(id, e) {
    this.setState({ currentTab: id })
  }

  render() {
    const tabKeys = [
      { text: 'About', id: '1', to: '/' },
      { text: 'Blog', id: '2', to: '/blog' },
      { text: 'Projects', id: '3', to: '/projects' },
    ]

    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Oscar Mejia</p>
        <MobileNav
          onClick={this.onClickToggle}
          toggleOn={this.state.toggleOn}
        />
      </nav>
    )
  }
}

export default Header
