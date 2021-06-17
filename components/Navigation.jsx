import React, { useState } from "react"
import Link from "next/link"

import NestedNavigationList from "./navigation/nested-navigation-list"

import navigationConfig from "../content/settings/navigation.json"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { get_started, rules, explore_avarice, digital_tools, community } = navigationConfig

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
        <Link href="/get-started">
          <li className="navigation__item">
            <a className="navigation__link">Get Started</a>
          </li>
        </Link>

        <NestedNavigationList filePath="get-started" listItems={get_started} />

        <Link href="/rules">
          <li className="navigation__item">
            <a className="navigation__link">Rules</a>
          </li>
        </Link>

        <NestedNavigationList filePath="rules" listItems={rules} />

        <Link href="/explore">
          <li className="navigation__item">
            <a className="navigation__link">Explore Avarice</a>
          </li>
        </Link>

        <NestedNavigationList filePath="explore" listItems={explore_avarice} />

        <Link href="/digital-tools">
          <li className="navigation__item">
            <a className="navigation__link">Digital Tools</a>
          </li>
        </Link>

        <NestedNavigationList filePath="digital-tools" listItems={digital_tools} />

        <Link href="/community">
          <li className="navigation__item">
            <a className="navigation__link">Community</a>
          </li>
        </Link>

        <NestedNavigationList filePath="community" listItems={community} />
      </ul>
    </nav>
  )
}

export default Navigation
