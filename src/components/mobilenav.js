import React from 'react'
import Link from 'gatsby-link'
import styles from './navmobile-module.module.css'
const MobileNav = ({ toggleOn, onClickToggle, currentTab, onClickTab }) => {
  const {
    overlayExpand,
    mobileNav,
    overlay,
    closebtn,
    overlayContent,
    navbarLinkVisited,
    navbarLink,
  } = styles
  const overlayExpandOn = toggleOn ? overlayExpand : overlay
  const tabKeys = [
    { text: 'About', id: '1', to: '/' },
    { text: 'Blog', id: '2', to: '/blog' },
    { text: 'Projects', id: '3', to: '/projects' },
  ]
  console.log(currentTab)
  return (
    <nav className={mobileNav}>
      <div id="myNav" className={overlayExpandOn}>
        <a
          className={closebtn}
          onClick={onClickToggle}
          style={{
            fontSize: '3rem',
          }}
        >
          &times;
        </a>
        <div className={overlayContent}>
          {tabKeys.map((tab, i) => (
            <Link
              key={`${i}${tab.text}`}
              className={currentTab === tab.id ? navbarLinkVisited : navbarLink}
              to={tab.to}
              data-id={tab.id}
              onClick={() => onClickTab(tab.id)}
            >
              {tab.text}
            </Link>
          ))}
        </div>
      </div>
      <span
        style={{
          fontSize: '30px',
          cursor: 'pointer',
        }}
        onClick={onClickToggle}
      >
        &#9776;
      </span>
    </nav>
  )
}

export default MobileNav
