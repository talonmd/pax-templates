import Link from "next/link"

import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

export default function Home() {
  return (
    <Layout headline="Enter the world of Avarice" cookieTrail={[]} imagePath="">
      <PageNavigation>
        <ul>
          <li>Get Started</li>
          <ul>
            <li>Quickstart Rules</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <li>Rules</li>
          <ul>
            <li>Player Rules</li>
            <li>CC Rules</li>
          </ul>
          <li>Explore Avarice</li>
          <ul>
            <li>Races</li>
            <li>Classes</li>
            <li>SURONIS</li>
            <li>World</li>
          </ul>
          <li>Digital Tools</li>
          <ul>
            <li>Avarice Sheets</li>
            <li>Avarice Database</li>
            <li>PDFS</li>
            <li>Ebooks</li>
          </ul>
          <li>Community</li>
          <ul>
            <li>Blog</li>
            <li>Forum</li>
            <li>Writers Guild</li>
            <li>Social Media</li>
            <li>Q&amp;A</li>
            <li>Help &amp; Support</li>
          </ul>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2>Main Content Headline</h2>
      </PageContent>
    </Layout>
  )
}
