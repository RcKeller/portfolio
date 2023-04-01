import { remark } from 'remark'
import html from 'remark-html'
import { getPostBySlug, getAllPosts, IPost } from '../lib/posts'

import SEO from '../components/SEO'
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = getPostBySlug((params?.slug as string) || '')
  const markdown = await remark()
    .use(html)
    .process(post.content || '')
  const content = markdown.toString()

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post: IPost) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

const Post = (post: IPost) => {
  const { content, excerpt } = post
  const { title, description, date, cover, source, demo } = post.frontmatter

  return (
    <>
      <SEO title={title} description={description || excerpt || ''} />

      <div id="main" className="alt">
        <section
          id="banner"
          className="style2"
          style={
            cover
              ? {
                  backgroundImage: `url(/${post.frontmatter.cover})`,
                  backgroundSize: 'contain',
                  backgroundPositionY: 'top',
                }
              : {}
          }
        >
          <div className="inner">
            <header className="major">
              <h1>{title}</h1>
              <h4>{`Published ${date}`}</h4>
              <ul className="actions">
                {demo && (
                  <li>
                    <a
                      href={demo}
                      target="_blank"
                      className="button scrolly icon fa-arrow-right"
                    >
                      Demo
                    </a>
                  </li>
                )}
                {source && (
                  <li>
                    <a
                      href={source}
                      target="_blank"
                      className="button scrolly icon fa-github"
                    >
                      Source
                    </a>
                  </li>
                )}
              </ul>
            </header>
          </div>
        </section>
        <section id="one">
          <div className="inner">
            {/* {cover && (
              // <span className="image main">
              <Image src={`/${cover}`} alt={title} width={854} height={480} />
            )} */}
            <section
              dangerouslySetInnerHTML={{ __html: content }}
              itemProp="articleBody"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Post
