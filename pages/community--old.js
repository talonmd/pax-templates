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
          <ul>
            <li>Blog</li>
          </ul>
          <li>Forum</li>
          <ul>
            <li>Forum</li>
            <li>Discord</li>
          </ul>
          <li>Writer's Guild</li>
          <ul>
            <li>About</li>
          </ul>
          <li>Social Media</li>
          <ul>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
          <li>Help &amp; Support</li>
          <ul>
            <li>Q&amp;A</li>
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
