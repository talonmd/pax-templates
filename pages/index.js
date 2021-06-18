import Link from "next/link"
import Head from "next/head"

import { NextSeo } from "next-seo"

import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

import { attributes, react as HomeContent } from "../content/pages/home.md"
import navigationConfig from "../content/settings/navigation.json"

export default function Home({ isLoggedIn }) {
  const { date, name, page_headline, seo, slug } = attributes
  const { get_started, rules, explore_avarice, digital_tools, community } = navigationConfig
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <NextSeo title={seo.title} description={seo.description} />
      <Layout headline={page_headline} cookieTrail={[]} imagePath="" isLoggedIn={isLoggedIn}>
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
          <HomeContent />
        </PageContent>
      </Layout>
    </>
  )
}
