import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './nav-module.module.css'
const Nav = () => {
  const tabKeys = [
    { text: 'About', id: '1', to: '/' },
    { text: 'Blog', id: '2', to: '/blog' },
    { text: 'Projects', id: '3', to: '/projects' },
  ]

  const { navbarItems, navbarLink, navbarLinkEmail } = styles
  return (
    <nav className={navbarItems}>
      {tabKeys.map((tab, i) => (
        <NavLink
          key={`${i}${tab.text}`}
          to={tab.to}
          className={navbarLink}
          exact
          activeStyle={{
            color: '#f7df1e',
          }}
        >
          {tab.text}
        </NavLink>
      ))}

      <a
        className={`${navbarLink} ${navbarLinkEmail}`}
        href="mailto:pomejia@gmail.com?subject=Hey Oscar"
        style={{
          textDecoration: 'none',
        }}
      >
        pomejia@gmail.com
      </a>
    </nav>
  )
}
export default Nav
