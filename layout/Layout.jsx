import React from "react"
import Head from "next/head"

import Header from "../components/Header"
import Navigation from "../components/Navigation"
import PageHero from "../components/PageHero"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"

const Layout = ({ children, imagePath, headline, cookieTrail, pageNav, isLoggedIn }) => {
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
      </Head>
      <div className="layout">
        <Header isLoggedIn={isLoggedIn} />
        <Navigation />
        <PageHero imagePath={imagePath} />
        <PageHeader headline={headline} cookieTrail={cookieTrail} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
