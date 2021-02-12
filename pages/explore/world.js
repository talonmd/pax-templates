import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="World"
      cookieTrail={[
        { name: "Explore Avarice", path: "/explore" },
        { name: "World", path: "/explore/world" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
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
