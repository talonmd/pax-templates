import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Avarice Database"
      cookieTrail={[
        { name: "Digital Tools", path: "/digital-tools" },
        { name: "Avarice Database", path: "/digital-tools/avarice-database" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Avarice Database</li>
          <ul>
            <li>About</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
