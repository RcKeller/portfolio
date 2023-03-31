import React from 'react'
import Link from 'next/link'

export interface IHeader {
  onToggleMenu: () => void
}
const Header = (props: IHeader) => (
  <header id="header" className="alt">
    <Link href="/" legacyBehavior>
      <a className="logo">
        <strong>Forty</strong> <span>by HTML5 UP</span>
      </a>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu}>
        Menu
      </a>
    </nav>
  </header>
)

export default Header
