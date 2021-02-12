import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Digital Tools"
      cookieTrail={[{ name: "Digital Tools", path: "/digital-tools" }]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Avarice Sheets</li>
          <li>Avarice Database</li>
          <li>PDFS</li>
          <li>Ebooks</li>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
