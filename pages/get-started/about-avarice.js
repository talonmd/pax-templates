import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="About Avarice"
      cookieTrail={[
        { name: "Get Started", path: "/get-started" },
        { name: "About Avarice", path: "/get-started/about-avarice" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>About Avarice</li>
          <ul>
            <li>About</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
