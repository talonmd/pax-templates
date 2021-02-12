import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Races"
      cookieTrail={[
        { name: "Explore Avarice", path: "/explore" },
        { name: "Races", path: "/explore/races" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Races</li>
          <ul>
            <li>Playable</li>
            <li>Unplayable</li>
            <li>Beasts</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
