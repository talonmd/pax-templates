import matter from "gray-matter"

import PostList from "../components/blog/PostList"

const Index = ({ posts, title, description, ...props }) => {
  return <PostList posts={posts} />
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteConfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context("../content/posts", true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
