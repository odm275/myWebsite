import React from 'react'
import Link from 'gatsby-link'

import styles from './nav-module.module.css'
const Nav = ({ onClick, currentTab }) => {
  const tabKeys = [
    { text: 'About', id: '1', to: '/' },
    { text: 'Blog', id: '2', to: '/blog' },
    { text: 'Projects', id: '3', to: '/projects' },
  ]

  const { navbarItems, navbarLinkVisited, navbarLink, navbarLinkEmail } = styles
  return (
    <nav className={navbarItems}>
      {tabKeys.map((tab, i) => (
        <Link
          key={`${i}${tab.text}`}
          className={currentTab === tab.id ? navbarLinkVisited : navbarLink}
          to={tab.to}
          data-id={tab.id}
          onClick={() => onClick(tab.id)}
        >
          {tab.text}
        </Link>
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
