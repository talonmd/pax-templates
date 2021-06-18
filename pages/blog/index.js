import matter from "gray-matter"

import ReactMarkdown from "react-markdown"

import Layout from "../../layout/Layout"
import PostList from "../../components/blog/PostList"

export default function Blog({ posts, frontmatter, content }) {
  return (
    <Layout attributes={frontmatter}>
      <ReactMarkdown children={content} />
      <PostList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  // loop through all the files in the posts directory with an IFE
  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    // generate slugs
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      // return the data for each file
      return {
        frontmatter: document.data,
        content: document.content,
        slug,
      }
    })
    // return the array of every files data
    return data
  })(require.context("../../content/posts", true, /\.md$/))

  // import the content and data of the blog page
  const fileData = await import(`../../content/pages/blog.md`)

  const { data, content } = matter(fileData.default)

  // return the posts array and page content as props
  return {
    props: {
      posts,
      frontmatter: data,
      content,
    },
  }
}
