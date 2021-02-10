import React from "react"
//import Head from "next/head"

import Header from "../components/Header"
import Navigation from "../components/Navigation"
import PageHero from "../components/PageHero"
import PageHeader from "../components/PageHeader"
import PageNavigation from "../components/PageNavigation"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <PageHero />
      <PageHeader />
      <PageNavigation />
      <main class="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
