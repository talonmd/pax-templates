import React, { useState } from "react"
import Link from "next/link"

import NestedNavigationList from "./navigation/nested-navigation-list"

const Navigation = ({ navigationConfig }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={`navigation ${!isOpen ? "closed" : ""}`}>
      <span
        className={`navigation__hamburger-icon`}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        &#9776;
      </span>
      <ul className="navigation__list">
        {navigationConfig.map(({ folder, pages }, index) => (
          <Link key={index} href={`/${folder.slug}`}>
            <>
              <li className="navigation__item">
                <a className="navigation__link">{folder.name}</a>
              </li>
              <NestedNavigationList filePath="get-started" folderSlug={folder.slug} pages={pages} />
            </>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
