import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Community"
      cookieTrail={[{ name: "Community", path: "/community" }]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Blog</li>
          <li>Forum</li>
          <ul>
            <li>Forum</li>
            <li>Discord</li>
          </ul>
          <li>Writer's Guild</li>
          <li>Social Media</li>
          <ul>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
          <li>Q&amp;A</li>
          <li>Help &amp; Support</li>
          <ul>
            <li>Contact</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
