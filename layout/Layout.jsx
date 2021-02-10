import React from "react"

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />

        <Navigation />

        <PageHeader />

        <PageNavigation />

        <main class="main"></main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
