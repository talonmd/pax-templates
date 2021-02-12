import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="PDFS"
      cookieTrail={[
        { name: "Digital Tools", path: "/digital-tools" },
        { name: "PDFS", path: "/digital-tools/pdfs" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>PDFS</li>
          <ul>
            <li>PDF #1</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
