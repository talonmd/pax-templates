import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Pricing"
      cookieTrail={[
        { name: "Get Started", path: "/get-started" },
        { name: "Pricing", path: "/get-started/pricing" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Pricing</li>
          <ul>
            <li>Free Plan</li>
            <li>Player's Plan</li>
            <li>CC's Plan</li>
            <li>Premium Plan</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
