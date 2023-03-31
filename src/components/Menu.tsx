import React from 'react'
import Link from 'next/link'

export interface IMenu {
  onToggleMenu: () => void
}

const Menu = (props: IMenu) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link legacyBehavior href="/">
            <a>
              <span onClick={props.onToggleMenu}>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/landing">
            <a>
              <span onClick={props.onToggleMenu}>Landing</span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/generic">
            <a>
              <span onClick={props.onToggleMenu}>Generic</span>
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/elements">
            <a>
              <span onClick={props.onToggleMenu}>Elements</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu}>
      Close
    </a>
  </nav>
)

export default Menu
