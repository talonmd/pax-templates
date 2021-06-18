import matter from "gray-matter"

import ReactMarkdown from "react-markdown"

import Layout from "../../layout/Layout"

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
