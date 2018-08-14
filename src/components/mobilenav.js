import React, { Component } from 'react'
import styles from './navbar-module.module.css'
const MobileNav = ({ toggleOn, onClick }) => {
  const { overlayExpand, mobileNav, overlay, closebtn, overlayContent } = styles

  const overlayExpandOn = toggleOn ? overlayExpand : overlay
  console.log(toggleOn)
  return (
    <nav className={mobileNav}>
      <div id="myNav" className={overlayExpandOn}>
        <a href="javascript:void(0)" className={closebtn} onClick={onClick}>
          &times;
        </a>
        <div class={overlayContent}>
          <a href="#">About Me</a>
          <a href="#">Blog</a>
          <a href="#">Projects</a>
        </div>
      </div>
      <span
        style={{
          fontSize: '30px',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        &#9776;
      </span>
    </nav>
  )
}

export default MobileNav
