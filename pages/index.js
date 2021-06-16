import Link from "next/link"
import Head from "next/head"

import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

import { attributes, react as HomeContent } from "../content/home.md"

export default function Home({ isLoggedIn }) {
  let { title, cats } = attributes
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Layout
        headline="Enter the world of Avarice"
        cookieTrail={[]}
        imagePath=""
        isLoggedIn={isLoggedIn}
      >
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

          <article>
            <h1>{title}</h1>
            <HomeContent />
            <ul>
              {cats.map((cat, k) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </PageContent>
      </Layout>
    </>
  )
}
