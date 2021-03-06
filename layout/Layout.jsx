import React from "react"
import Head from "next/head"

import { NextSeo } from "next-seo"

import Header from "../components/Header"
import Navigation from "../components/Navigation"
import PageHero from "../components/PageHero"
import PageHeader from "../components/PageHeader"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"
import Footer from "../components/Footer"

const Layout = ({ children, attributes, navigationConfig, pageNav, addNetlifyIdentityScript }) => {
  if (!navigationConfig) navigationConfig = []
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
        />
        {addNetlifyIdentityScript ? (
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        ) : null}
      </Head>
      {attributes && attributes.seo ? (
        <NextSeo title={attributes.seo.title} description={attributes.seo.description} />
      ) : null}
      <div className="layout">
        <Header />
        <Navigation navigationConfig={navigationConfig} />
        <PageHero
          imagePath={attributes && attributes.hero_banner ? attributes.hero_banner : null}
        />
        <PageHeader
          headline={attributes && attributes.page_headline ? attributes.page_headline : null}
        />
        {pageNav ? (
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
        ) : null}
        <PageContent>{children}</PageContent>
        <Footer />
      </div>
    </>
  )
}

export default Layout
