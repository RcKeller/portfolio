import { remark } from 'remark'
import html from 'remark-html'
import { getPostBySlug, getAllPosts } from '../lib/posts'

import SEO from '../components/SEO'

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
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
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

const Post = (post) => {
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{post.frontmatter.title}</h1>
              <h6>{post.frontmatter.date}</h6>
            </header>
            <span className="image main">
              <img src="/static/images/pic11.jpg" alt="" />
            </span>
            <section
              dangerouslySetInnerHTML={{ __html: post.content }}
              itemProp="articleBody"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Post
