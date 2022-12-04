// src/pages/[slug].js

// Install remark and remark-html
import { remark } from 'remark'
import html from 'remark-html'
import { getPostBySlug, getAllPosts } from '../lib/posts'

import Layout from "../components/layout"
import SEO from "../components/seo"

export async function getStaticProps({ params }) {
  console.warn('GET POST')
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

const BlogPost = post => {
  console.warn('POST', post)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.content }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          {/* <Bio /> */}
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPost
