import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default () => {
  return (
    <Layout
      headline="S.U.R.O.N.I.S."
      cookieTrail={[
        { name: "Explore Avarice", path: "/explore" },
        { name: "SURONIS", path: "/explore/suronis" },
      ]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>SURONIS</li>
          <ul>
            <li>About</li>
            <li>Weapons</li>
            <li>Wearables</li>
            <li>Items</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
