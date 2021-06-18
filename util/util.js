import matter from "gray-matter"

export async function generateNavigationConfig() {
  // import in the navigation config
  const navigationConfigData = await import(`../content/navigation/navigation.json`)
  // destructure the data needed
  const {
    default: { navigation_order },
  } = navigationConfigData

  // map that array of folder names into an array of folder slugs
  const folderSlugs = navigation_order.map(({ navigation_group }) => {
    return { name: navigation_group, slug: string_to_slug(navigation_group) }
  })

  // map the array of folder slugs to get the pages assigned to their folder
  const navigationConfig = await Promise.all(
    folderSlugs.map(async (folder) => {
      // pull the md file data to get the list of pages in this folder group
      const fileData = await import(`../content/navigation/${folder.slug}.md`)
      const { data } = matter(fileData.default)

      // map the slugs for each page in the folder
      const pages = data.pages.map(({ page }) => {
        return { name: page, slug: string_to_slug(page) }
      })

      // return the navigation group config object
      return { folder, pages }
    })
  )

  // return the page data as
  return navigationConfig
}

// utility
export function string_to_slug(str) {
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
