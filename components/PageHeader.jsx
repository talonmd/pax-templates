import React from "react"
import Link from "next/link"

const PageHeader = ({ headline, cookieTrail }) => {
  return (
    <div className="page-header">
      <h1 className="page-header__headline">{headline}</h1>
      <div className="page-header__breadcrumb-box">
        <ul className="page-header__breadcrumb-list">
          {cookieTrail.map(({ name, path }, index) => (
            <li className="page-header__breadcrumb-item" key={index}>
              <Link href={path}>
                <a className="page-header__breadcrumb-link">{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageHeader
