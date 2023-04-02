import React from 'react'
import Link from 'next/link'
import config from '../lib/config'

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
          <a href={config.links.linkedin}>LinkedIn</a>
        </li>
        <li>
          <a href={config.links.github}>GitHub</a>
        </li>
        <li>
          <a target="_blank" href="/resume.pdf">
            Resume
          </a>
        </li>
        <li>
          <Link legacyBehavior href="/testimonials">
            <a>
              <span onClick={props.onToggleMenu}>Testimonials</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu}>
      Close
    </a>
  </nav>
)

export default Menu
