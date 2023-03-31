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
          <a href="https://www.linkedin.com/in/jbarrowsfitzgerald/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/jbarrfitz">GitHub</a>
        </li>
        <li>
          <a target="_blank" href="/resume.pdf">
            Resume
          </a>
        </li>
        <li>
          <Link legacyBehavior href="/testimonials">
            <span onClick={props.onToggleMenu}>Testimonials</span>
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
