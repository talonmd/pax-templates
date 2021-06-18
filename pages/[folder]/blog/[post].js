import Link from "next/link"

import ReactMarkdown from "react-markdown"

import Layout from "../../../layout/Layout"

import { importMarkdownData } from "../../../util/util.js"

export default function BlogPost({ frontmatter, content }) {
  console.log("FRONTMATTER:", frontmatter)
  return (
    <Layout attributes={frontmatter}>
      <Link href="/blog">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>By {frontmatter.author}</p>
        <div>
          <ReactMarkdown children={content} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  // pull the slug from query params
  const { post } = ctx.params

  // import the content and data from the post
  const fileData = await import(`../../../content//posts/${post}.md`)
  const { data, content } = matter(fileData.default)

  // return the post data as a prop
  return {
    props: {
      frontmatter: data,
      content,
    },
  }
}

export async function getStaticPaths() {
  // loop through all the files in the posts directory with an IFE
  const blogSlugs = ((context) => {
    const keys = context.keys()

    // generate slugs
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)

      // return slug for each file
      return slug
    })

    // return the array of slugs
    return data
  })(require.context("../../../content/posts", true, /\.md$/))

  // set the paths property
  const paths = blogSlugs.map((slug) => `/blog/${slug}`)

  // return the required configurations
  return {
    paths,
    fallback: false,
  }
}
