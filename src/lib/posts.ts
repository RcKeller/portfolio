// src/lib/blog.js

// Install gray-matter and date-fns
import matter from 'gray-matter'
import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

export interface IPost {
  slug: string
  frontmatter: {
    title: string
    subtitle?: string
    description?: string
    /** Name of page in menu */
    menuTitle?: string
    category?: 'Portfolio' | 'Boilerplates' | string
    /**
     * Cover img name
     * @example emotional-cartography.png
     **/
    cover?: string
    /** Name of the series this is a part of */
    series?: string
    /** Title of the next article to recommend */
    next?: string
    /** URL of the next article */
    nexturl?: string
    /** Demo URL */
    demo?: string
    /** Repo URL */
    source?: string
    tags?: string[]
    date?: string
  }
  content: string
  /** ??? not sure if gray-matter generates this? */
  excerpt?: string
}

// Add markdown files in `src/content/blog`
const postsDirectory = join(process.cwd(), 'content')

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const dirContents = fs.readdirSync(postsDirectory)
  const matchedFile = dirContents.find((fileName) => {
    const fileNameWithoutSlug = (
      fileName.includes('--') ? fileName.split('--')[1] : fileName
    ).replace(/\.md$/, '')
    return fileNameWithoutSlug === realSlug
  })
  const fullPath = join(postsDirectory, matchedFile || '')

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const rawDate = matchedFile?.includes('--')
    ? matchedFile.split('--')[0]
    : data.date
  // const date = format(parseISO(rawDate), 'yyyy-mm-dd')
  // const date = format(parseISO(data.date), 'MMMM dd, yyyy')

  // console.warn('DEBUG', { slug, fullPath, rawDate, date })

  const post: IPost = {
    slug: realSlug,
    frontmatter: { ...data, title: data.title || '', date: rawDate },
    content,
  }
  return post
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => {
    const slugWithoutDate = slug.includes('--') ? slug.split('--')[1] : slug
    return getPostBySlug(slugWithoutDate)
  })

  return posts
}
