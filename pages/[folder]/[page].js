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

  const folderConfigs = await Promise.all(
    folderNames.map(async (folderName) => {
      const fileData = await import(`../../content/navigation/${folderName}.md`)

      const { data } = matter(fileData.default)

      const pageSlugs = data.pages.map(({ page }) => {
        return { params: { folder: folderName, page: string_to_slug(page) } }
      })

      console.log(pageSlugs)

      return pageSlugs
    })
  )

  console.log("FOLDER CONFIGS", folderConfigs)

  let combined = []

  folderConfigs.forEach((folderConfig) => (combined = [...combined, ...folderConfig]))

  console.log(combined)

  // set the paths property
  //const paths = pageSlugs.map((slug) => `/${FOLDER}/${slug}`)

  //console.log(paths)

  // return the required configurations
  return {
    paths: combined,
    fallback: false,
  }
}

// utility
function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
  var to = "aaaaeeeeiiiioooouuuunc------"
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes

  return str
}
