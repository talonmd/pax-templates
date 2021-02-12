import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Blog"
      cookieTrail={[
        { name: "Community", path: "/community" },
        { name: "Blog", path: "/community/blog" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Blog</li>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
