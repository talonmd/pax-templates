import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="CC Rules"
      cookieTrail={[
        { name: "Rules", path: "/rules" },
        { name: "CC Rules", path: "/rules/cc-rules" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>CC Rules</li>
          <ul>
            <li>Section #1</li>
            <li>Section #2</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
