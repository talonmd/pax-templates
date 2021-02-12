import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Writer's Guild"
      cookieTrail={[
        { name: "Community", path: "/community" },
        { name: "Writer's Guild", path: "/community/writers-guild" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Writer's Guild</li>
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
