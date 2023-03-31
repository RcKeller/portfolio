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
          <section id="one" className="tiles">
            <article
              style={{
                backgroundImage: `url('/static/images/pic01.jpg')`,
              }}
            >
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link legacyBehavior href="/landing">
                <a className="link primary"></a>
              </Link>
            </article>
            <article
              style={{
                backgroundImage: `url('/static/images/pic02.jpg')`,
              }}
            >
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link legacyBehavior href="/landing">
                <a className="link primary"></a>
              </Link>
            </article>
            <article
              style={{
                backgroundImage: `url('/static/images/pic03.jpg')`,
              }}
            >
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link legacyBehavior href="/landing">
                <a className="link primary"></a>
              </Link>
            </article>
            <article
              style={{
                backgroundImage: `url('/static/images/pic04.jpg')`,
              }}
            >
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link legacyBehavior href="/landing">
                <a className="link primary"></a>
              </Link>
            </article>
            <article
              style={{
                backgroundImage: `url('/static/images/pic05.jpg')`,
              }}
            >
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link legacyBehavior href="/landing">
                <a className="link primary"></a>
              </Link>
            </article>
            <article
              style={{
                backgroundImage: `url('/static/images/pic06.jpg')`,
              }}
            >
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link legacyBehavior href="/landing">
                <a className="link primary"></a>
              </Link>
            </article>
          </section>
          <section id="two">
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
