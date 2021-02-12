import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Forum"
      cookieTrail={[
        { name: "Community", path: "/community" },
        { name: "Forum", path: "/community/forum" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Forum</li>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
