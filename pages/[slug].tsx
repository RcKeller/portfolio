import { remark } from 'remark'
import html from 'remark-html'
import { getPostBySlug, getAllPosts } from '../lib/posts'

import SEO from '../components/SEO'

import { Container, Card, Text } from '@nextui-org/react'

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
    <Container>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <Card as="header" variant="flat">
          <Text itemProp="headline" h1>
            {post.frontmatter.title}
          </Text>
          <Text h6>{post.frontmatter.date}</Text>
        </Card>
        <section
          dangerouslySetInnerHTML={{ __html: post.content }}
          itemProp="articleBody"
        />
      </article>
    </Container>
  )
}

export default Post
