import matter from "gray-matter"

import ReactMarkdown from "react-markdown"

import Layout from "../layout/Layout"

import navigationConfig from "../content/settings/navigation.json"

export default function Home({ frontmatter, content }) {
  return (
    <Layout attributes={frontmatter} pageNav={navigationConfig} addNetlifyIdentityScript>
      <ReactMarkdown children={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  // import the content and data from the page
  const fileData = await import(`../content/pages/home.md`)

  const { data, content } = matter(fileData.default)

  // return the page data as a prop
  return {
    props: {
      frontmatter: data,
      content,
    },
  }
}
