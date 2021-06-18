import matter from "gray-matter"

import ReactMarkdown from "react-markdown"

import Layout from "../../layout/Layout"

import { string_to_slug, importMarkdownData } from "../../util/util.js"

export default function IndexPage({ frontmatter, content }) {
  console.log("FRONTMATTER:", frontmatter)
  return (
    <Layout attributes={frontmatter} pageNav>
      <ReactMarkdown children={content} />
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  // pull the slugs from query params
  const { folder, page } = ctx.params

  // import the content and data from the page
  const fileData = await import(`../../content/pages/${folder}.md`)

  const { data, content } = matter(fileData.default)

  // return the page data as a prop
  return {
    props: {
      frontmatter: data,
      content,
    },
  }
}

export async function getStaticPaths() {
  // import in the navigation config
  const navigationConfig = await import(`../../content/navigation/navigation.json`)
  // destructure the data needed
  const {
    default: { navigation_order },
  } = navigationConfig
  // map that array into an array of folder slugs that
  // is configured how it need to be for returning paths
  const paths = navigation_order.map((obj) => {
    return { params: { folder: string_to_slug(obj.navigation_group) } }
  })

  // return the required configurations
  return {
    paths,
    fallback: false,
  }
}
