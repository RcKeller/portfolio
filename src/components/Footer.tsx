import React from 'react'

const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="mailto:andy@barrfitz.com" className="icon alt fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a href="tel:2064273176" className="icon alt fa-phone">
            <span className="label">Phone</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/rckeller" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/andy-keller-bf/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright" color="white">
        <li>&copy; Andrew Keller Barrows-Fitzgerald</li>
        <li>Built w/ ♥️ in Las Vegas, NV</li>
      </ul>
    </div>
  </footer>
)

export default Footer
