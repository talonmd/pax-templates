import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Ebooks"
      cookieTrail={[
        { name: "Digital Tools", path: "/digital-tools" },
        { name: "Ebooks", path: "/digital-tools/ebooks" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
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
