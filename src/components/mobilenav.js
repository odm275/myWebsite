import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navmobile-module.module.css'
const MobileNav = ({ toggleOn, onClickToggle, currentTab, onClickTab }) => {
  const { overlayExpand, mobileNav, overlay, closebtn, overlayContent } = styles
  const overlayExpandOn = toggleOn ? overlayExpand : overlay
  const tabKeys = [
    { text: 'About', id: '1', to: '/' },
    { text: 'Blog', id: '2', to: '/blog' },
    { text: 'Projects', id: '3', to: '/projects' },
  ]
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
            <NavLink
              key={`${i}${tab.text}`}
              to={tab.to}
              data-id={tab.id}
              exact
              activeStyle={{
                color: '#f7df1e',
              }}
            >
              {tab.text}
            </NavLink>
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
