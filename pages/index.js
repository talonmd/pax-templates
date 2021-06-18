import matter from "gray-matter"

import ReactMarkdown from "react-markdown"

import Layout from "../layout/Layout"

import { generateNavigationConfig } from "../util/util.js"

export default function Home({ navigationConfig, frontmatter, content }) {
  return (
    <Layout
      attributes={frontmatter}
      navigationConfig={navigationConfig}
      pageNav
      addNetlifyIdentityScript
    >
      <ReactMarkdown children={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  // import the content and data from the page
  const fileData = await import(`../content/pages/home.md`)

  const { data, content } = matter(fileData.default)

  const navigationConfig = await generateNavigationConfig()

  // return the page data as a prop
  return {
    props: {
      navigationConfig,
      frontmatter: data,
      content,
    },
  }
}
