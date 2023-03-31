import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts } from '../lib/posts'

import BannerLanding from '../components/BannerLanding'

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default function Index({ posts }) {
  if (posts.length === 0) {
    return (
      <p>No blog posts found. Add markdown posts to &nbsp;content&nbsp;.</p>
    )
  }

  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page" />
      </Head>

      <div>
        <BannerLanding />

        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>Sed amet aliquam</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
                Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
                libero. Nullam et orci eu lorem consequat tincidunt vivamus et
                sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                ligula tate urna.
              </p>
            </div>
          </section>
          <section id="two" className="spotlights">
            <section>
              <Link legacyBehavior href="/generic">
                <a className="image">
                  <img src="/static/images/pic08.jpg" alt="" />
                </a>
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Orci maecenas</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link legacyBehavior href="/generic">
                        <a className="button">Learn more</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link legacyBehavior href="/generic">
                <a className="image">
                  <img src="/static/images/pic09.jpg" alt="" />
                </a>
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Rhoncus magna</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link legacyBehavior href="/generic">
                        <a className="button">Learn more</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <Link legacyBehavior href="/generic">
                <a className="image">
                  <img src="/static/images/pic10.jpg" alt="" />
                </a>
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Sed nunc ligula</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link legacyBehavior href="/generic">
                        <a className="button">Learn more</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  )
}

/**
{posts.map((post) => {
  const title = post.frontmatter.title || post.slug
  return (
    <article
      key={post.slug}
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2>
          <Link href={post.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <small>{post.frontmatter.date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  )
})}
*/
