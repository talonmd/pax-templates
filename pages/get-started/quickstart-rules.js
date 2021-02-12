import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Quickstart Rules"
      cookieTrail={[
        { name: "Get Started", path: "/get-started" },
        { name: "Quickstart Rules", path: "/get-started/quickstart-rules" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Quickstart Rules</li>
          <ul>
            <li>Rules</li>
            <li>Races</li>
            <li>Classes</li>
            <li>SURONIS</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
