import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navbar from './navbar'
import styles from './navbar-module.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
      <Navbar>
        <nav className={styles.navbarItems}>
          <div className={`${styles.navbarLink}`}>Oscar Mejia</div>
          <div
            onClickToggle={this.onClickToggle}
            className={`${styles.navbarLink} ${styles.navbarLinkToggle}`}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
        <nav
          className={`${styles.navbarItems} ${
            this.state.toggleOn
              ? styles.navbarToggleShow
              : styles.navbarItemsRight
          }`}
        >
          {tabKeys.map((tab, i) => (
            <Link
              key={`${i}${tab.text}`}
              className={
                this.state.currentTab === tab.id
                  ? styles.navbarLinkVisited
                  : styles.navbarLink
              }
              to={tab.to}
              data-id={tab.id}
              onClick={this.onClickTab.bind(this, tab.id)}
            >
              {tab.text}
            </Link>
          ))}

          <a className={`${styles.navbarLink} ${styles.navbarLinkEmail}`}>
            pomejia@gmail.com
          </a>
        </nav>
      </Navbar>
    )
  }
}

export default Header
