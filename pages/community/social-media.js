import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Social Media"
      cookieTrail={[
        { name: "Community", path: "/community" },
        { name: "Social Media", path: "/community/social-media" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Social Media</li>
          <ul>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
