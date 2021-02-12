import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Classes"
      cookieTrail={[
        { name: "Explore Avarice", path: "/explore" },
        { name: "Classes", path: "/explore/classes" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Classes</li>
          <ul>
            <li>About</li>
            <li>Playable</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
