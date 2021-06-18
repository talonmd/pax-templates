import Link from "next/link"
import Head from "next/head"

import { useState } from "react"

import Layout from "../../layout/Layout"
import PageNavigation from "../../components/PageNavigation"
import PageContent from "../../components/PageContent"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("YOUR_TOOLS")
  return (
    <Layout attributes={frontmatter} pageNav={navigationConfig} addNetlifyIdentityScript>
      <PageNavigation>
        <ul>
          <li
            onClick={() => setCurrentPage("YOUR_TOOLS")}
            className={currentPage === "YOUR_TOOLS" ? "sec-active" : ""}
          >
            Your Tools
          </li>
          <li
            onClick={() => setCurrentPage("YOUR_ACCOUNT")}
            className={currentPage === "YOUR_ACCOUNT" ? "sec-active" : ""}
          >
            Your Account
          </li>
          <li
            onClick={() => setCurrentPage("YOUR_PLAN")}
            className={currentPage === "YOUR_PLAN" ? "sec-active" : ""}
          >
            Your Plan
          </li>
          <li
            onClick={() => setCurrentPage("BILLING_INFO")}
            className={currentPage === "BILLING_INFO" ? "sec-active" : ""}
          >
            Billing Info
          </li>
          <li
            onClick={() => setCurrentPage("SETTINGS")}
            className={currentPage === "SETTINGS" ? "sec-active" : ""}
          >
            Settings
          </li>
        </ul>
      </PageNavigation>
      <PageContent>
        {currentPage === "YOUR_TOOLS" ? (
          <div className="your-tools">
            <h2>your tools</h2>
            <ul>
              <li>
                <button>Avarice Sheets</button>
              </li>
              <li>
                <button>Avarice Tabletop</button>
              </li>
            </ul>
          </div>
        ) : currentPage === "YOUR_ACCOUNT" ? (
          <div className="your-account">
            <h2>your account</h2>
          </div>
        ) : currentPage === "YOUR_PLAN" ? (
          <div className="your-plan">
            <h2>your plan</h2>
            <ul>
              <li>
                <button>Free Plan</button>
              </li>
              <li>
                <button>Player's Plan</button>
              </li>
              <li>
                <button>CC's Plan</button>
              </li>
              <li>
                <button>Writer's Plan</button>
              </li>
              <li>
                <button>Premium Plan</button>
              </li>
            </ul>
          </div>
        ) : currentPage === "BILLING_INFO" ? (
          <div className="billing-info">
            <h2>billing info</h2>
          </div>
        ) : currentPage === "SETTINGS" ? (
          <div className="settings">
            <h2>settings</h2>
          </div>
        ) : null}
      </PageContent>
    </Layout>
  )
}
