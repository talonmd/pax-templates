import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Avarice Sheets"
      cookieTrail={[
        { name: "Digital Tools", path: "/digital-tools" },
        { name: "Avarice Sheets", path: "/digital-tools/avarice-sheets" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Avarice Sheets</li>
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
