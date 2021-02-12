import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Resources"
      cookieTrail={[
        { name: "Get Started", path: "/get-started" },
        { name: "Resources", path: "/get-started/resources" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Resources</li>
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
