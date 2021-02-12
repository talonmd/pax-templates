import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

export default () => {
  return (
    <Layout headline="Rules" cookieTrail={[{ name: "Rules", path: "/rules" }]} imagePath="">
      <PageNavigation>
        <ul>
          <li>Player Rules</li>
          <ul>
            <li>Section #1</li>
            <li>Section #2</li>
          </ul>
          <li>CC Rules</li>
          <ul>
            <li>Section #1</li>
            <li>Section #2</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
