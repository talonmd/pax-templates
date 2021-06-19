import matter from "gray-matter"

import ReactMarkdown from "react-markdown"

import Layout from "../../layout/Layout"

import { generateNavigationConfig, string_to_slug } from "../../util/util.js"

export default function Page({ navigationConfig, frontmatter, content }) {
  console.log("FRONTMATTER:", frontmatter)
  return (
    <Layout attributes={frontmatter} navigationConfig={navigationConfig}>
      <ReactMarkdown children={content} />
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  // pull the slugs from query params
  const { folder, page } = ctx.params

  // import the content and data from the page
  const fileData = await import(`../../content/pages/${page}.md`)

  const { data, content } = matter(fileData.default)

  // generate the navigation config
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

export async function getStaticPaths() {
  // import in the navigation config
  const navigationConfig = await import(`../../content/navigation/navigation.json`)
  // destructure the data needed
  const {
    default: { navigation_order },
  } = navigationConfig
  // map that array into an array of folder slugs
  const folderNames = navigation_order.map((obj) => {
    return string_to_slug(obj.navigation_group)
  })

  // map through the navigation group configurations to
  // build out the urls of all the paths
  const foldersPageSlugs = await Promise.all(
    folderNames.map(async (folderName) => {
      // pull in the data from the config md file
      const fileData = await import(`../../content/navigation/${folderName}.md`)

      const { data } = matter(fileData.default)

      // create the paths object for each page path
      const pageSlugs = data.pages.map(({ page }) => {
        return { params: { folder: folderName, page: string_to_slug(page) } }
      })

      // return the object
      return pageSlugs
    })
  )

  let paths = []

  // spread in each folder array into one main array
  foldersPageSlugs.forEach((pageSlugs) => (paths = [...paths, ...pageSlugs]))

  // return the required configurations
  return {
    paths,
    fallback: false,
  }
}
