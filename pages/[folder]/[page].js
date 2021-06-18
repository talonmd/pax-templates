import matter from "gray-matter"

import ReactMarkdown from "react-markdown"

import Layout from "../../layout/Layout"

let FOLDER

export default function Page({ frontmatter, content }) {
  console.log("FRONTMATTER:", frontmatter)
  return (
    <Layout attributes={frontmatter}>
      <ReactMarkdown children={content} />
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  // pull the slugs from query params
  const { folder, page } = ctx.params

  console.log("FOLDER", folder)

  FOLDER = folder

  console.log("new folder", FOLDER)

  // import the content and data from the page
  const fileData = await import(`../../content/pages/${page}.md`)

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
  // loop through all the files in the pages directory with an IFE
  const pageSlugs = ((context) => {
    const keys = context.keys()

    // generate slugs
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)

      // return slug for each file
      return slug
    })

    // return the array of slugs
    return data
  })(require.context("../../content/pages", true, /\.md$/))

  // set the paths property
  const paths = pageSlugs.map((slug) => `/${FOLDER}/${slug}`)

  console.log(paths)

  // return the required configurations
  return {
    paths,
    fallback: false,
  }
}
