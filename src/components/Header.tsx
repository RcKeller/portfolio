import React from 'react'
import Link from 'next/link'

export interface IHeader {
  onToggleMenu: () => void
}
const Header = (props: IHeader) => (
  <header id="header" className="alt">
    <Link href="/" legacyBehavior>
      <a className="logo">
        <strong>Andy K. Barrows</strong> <span>- Software Engineer</span>
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
