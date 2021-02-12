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
          <ul>
            <li>About</li>
          </ul>
          <li>Avarice Database</li>
          <ul>
            <li>About</li>
          </ul>
          <li>PDFS</li>
          <ul>
            <li>PDF #1</li>
          </ul>
          <li>Ebooks</li>
          <ul>
            <li>Ebook #1</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
