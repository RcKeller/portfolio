import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts, IPost } from '../lib/posts'

import Banner from '../components/Banner'

export interface IIndexProps {
  posts: IPost[]
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default function Index({ posts }: IIndexProps) {
  if (posts.length === 0) {
    return (
      <p>No blog posts found. Add markdown posts to &nbsp;content&nbsp;.</p>
    )
  }

  return (
    <>
      <div>
        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Latest Projects</h2>
              </header>
            </div>
          </section>
          <section id="one" className="tiles">
            {posts
              .filter(
                (p) =>
                  p.frontmatter.category === 'Portfolio' &&
                  !!p.frontmatter.cover
              )
              .sort((a, b) => {
                return (
                  new Date(b.frontmatter?.date || '').getTime() -
                  new Date(a.frontmatter?.date || '').getTime()
                )
              })
              .map((post) => {
                const title = post.frontmatter.title || post.slug
                return (
                  <article
                    key={post.slug}
                    itemScope
                    itemType="http://schema.org/Article"
                    style={{
                      backgroundImage: `url(/${post.frontmatter.cover})`,
                    }}
                  >
                    <header className="major">
                      <h3>{title}</h3>
                      <p>{post.frontmatter?.subtitle}</p>
                    </header>
                    <Link legacyBehavior href={`/${post.slug}`}>
                      <a className="link primary"></a>
                    </Link>
                  </article>
                )
              })}
          </section>
          {/* <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link legacyBehavior href="/landing">
                    <a className="button next">Get Started</a>
                  </Link>
                </li>
              </ul>
            </div>
          </section> */}
        </div>
      </div>
    </>
  )
}
