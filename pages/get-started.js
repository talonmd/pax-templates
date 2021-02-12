import Link from "next/link"

import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

export default () => {
  return (
    <Layout
      headline="Get Started"
      cookieTrail={[{ name: "Get Started", path: "/get-started" }]}
      imagePath=""
    >
      <PageNavigation>
        <ul>
          <li>Quickstart Rules</li>
          <ul>
            <li>About Avarice</li>
            <li>Rules</li>
            <li>Races</li>
            <li>Classes</li>
            <li>SURONIS</li>
          </ul>
          <li>Resources</li>
          <ul>
            <li>Avarice Sheets</li>
            <li>PDFS</li>
          </ul>
          <li>Pricing</li>
          <ul>
            <li>Plans</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
