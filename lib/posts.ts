// src/lib/blog.js

// Install gray-matter and date-fns
import matter from 'gray-matter'
import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

// Add markdown files in `src/content/blog`
const postsDirectory = join(process.cwd(), 'content')

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const dirContents = fs.readdirSync(postsDirectory)
  const matchedFile = dirContents.find((fileName) => {
    const fileNameWithoutSlug = (fileName.includes('--') ? fileName.split('--')[1] : fileName).replace(/\.md$/, '')
    return fileNameWithoutSlug === realSlug
  })
  const fullPath = join(postsDirectory, matchedFile)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  // console.warn( { fullPath, matchedFile, data: data.date })
  const rawDate = matchedFile.includes('--') ? matchedFile.split('--')[0] : data.date
  const date = format(parseISO(rawDate), 'yyyy-mm-dd')
  // const date = format(parseISO(data.date), 'MMMM dd, yyyy')

  return { slug: realSlug, frontmatter: { ...data, date }, content }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs.map((slug) => {
    const slugWithoutDate = slug.includes('--') ? slug.split('--')[1] : slug
    return getPostBySlug(slugWithoutDate)
  })

  return posts
}
