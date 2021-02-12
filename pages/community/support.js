import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Help &amp; Support"
      cookieTrail={[
        { name: "Community", path: "/community" },
        { name: "Help &amp; Support", path: "/community/support" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
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
