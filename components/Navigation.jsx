import React, { useState } from "react"
import Link from "next/link"

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
        <ul className="navigation__list--nested">
          {get_started.map((listItem, index) => {
            return (
              <Link key={index} href={`/get-started/${listItem.slug}`}>
                <li className="navigation__item--nested">
                  <a className="navigation__link--nested">{listItem.page}</a>
                </li>
              </Link>
            )
          })}
        </ul>

        <Link href="/rules">
          <li className="navigation__item">
            <a className="navigation__link">Rules</a>
          </li>
        </Link>

        <ul className="navigation__list--nested">
          {rules.map((listItem, index) => {
            return (
              <Link key={index} href={`/rules/${listItem.slug}`}>
                <li className="navigation__item--nested">
                  <a className="navigation__link--nested">{listItem.page}</a>
                </li>
              </Link>
            )
          })}
        </ul>

        <Link href="/explore">
          <li className="navigation__item">
            <a className="navigation__link">Explore Avarice</a>
          </li>
        </Link>

        <ul className="navigation__list--nested">
          {explore_avarice.map((listItem, index) => {
            return (
              <Link key={index} href={`/explore/${listItem.slug}`}>
                <li className="navigation__item--nested">
                  <a className="navigation__link--nested">{listItem.page}</a>
                </li>
              </Link>
            )
          })}
        </ul>

        <Link href="/digital-tools">
          <li className="navigation__item">
            <a className="navigation__link">Digital Tools</a>
          </li>
        </Link>

        <ul className="navigation__list--nested">
          {digital_tools.map((listItem, index) => {
            return (
              <Link key={index} href={`/digital-tools/${listItem.slug}`}>
                <li className="navigation__item--nested">
                  <a className="navigation__link--nested">{listItem.page}</a>
                </li>
              </Link>
            )
          })}
        </ul>

        <Link href="/community">
          <li className="navigation__item">
            <a className="navigation__link">Community</a>
          </li>
        </Link>

        <ul className="navigation__list--nested">
          {community.map((listItem, index) => {
            return (
              <Link key={index} href={`/community/${listItem.slug}`}>
                <li className="navigation__item--nested">
                  <a className="navigation__link--nested">{listItem.page}</a>
                </li>
              </Link>
            )
          })}
        </ul>
      </ul>
    </nav>
  )
}

export default Navigation
