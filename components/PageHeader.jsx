import React from "react"

const PageHeader = ({ headline, cookieTrail }) => {
  return (
    <div className="page-header">
      <h1 className="page-header__headline">{headline}</h1>
      <div className="page-header__breadcrumb-box">
        <ul className="page-header__breadcrumb-list">
          <li className="page-header__breadcrumb-item">
            <a href="#" className="page-header__breadcrumb-link">
              Page Title
            </a>
          </li>
          <li className="page-header__breadcrumb-item">
            <a href="#" className="page-header__breadcrumb-link">
              Page Title
            </a>
          </li>
          <li className="page-header__breadcrumb-item">
            <a href="#" className="page-header__breadcrumb-link">
              Page Title
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PageHeader
