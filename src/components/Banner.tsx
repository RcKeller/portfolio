import React from 'react'
import Link from 'next/link'
const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>👋 Hi - I&apos;m Andy Keller</h1>
      </header>
      {/* <div className="content"> */}
      <div className="">
        <p>
          I&apos;m a Sr. Frontend Engineer @Shopify based out of St. Louis, MO.
          For the past decade, I have pushed myself to explore many technical
          verticals including web development, quantitative science, DevOps and
          cybersecurity. I began my career as a researcher in the midwest and
          moved to Seattle to gain industry experience and an advanced
          education, taking some time in-between to travel across the states.
        </p>
        {/* <p>
          What keeps me going is the drive to not just consume knowledge, but
          create it. As developers we are always on the forefront of the
          industry, creating new systems and experiences that drive social
          progress, and it&apos;s an exciting field to be in. Our work is a
          labor of love and I want to share that with everyone possible.
        </p> */}
        <ul className="actions">
          <p>
            If you&apos;d like to learn more, please check out my open source
            work & read what other folks have to say about me.
          </p>
          <li>
            <a
              href="https://www.linkedin.com/in/andy-keller-bf/"
              className="button scrolly icon fa-linkedin"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rckeller"
              className="button scrolly icon fa-github"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="button scrolly icon fa-file"
            >
              Resume
            </a>
          </li>
          <li>
            <Link legacyBehavior href="/testimonials">
              <a className="button scrolly icon fa-quote-right">Testimonials</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
