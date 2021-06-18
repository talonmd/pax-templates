import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Explore Avarice"
      cookieTrail={[{ name: "Explore Avarice", path: "/explore" }]}
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
          <li>Classes</li>
          <ul>
            <li>About</li>
            <li>Playable</li>
          </ul>
          <li>SURONIS</li>
          <ul>
            <li>About</li>
            <li>Weapons</li>
            <li>Wearables</li>
            <li>Items</li>
          </ul>
          <li>World</li>
          <ul>
            <li>History</li>
            <li>Organizations</li>
            <li>Places</li>
            <li>People</li>
            <li>Map</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
