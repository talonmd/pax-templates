import React from "react"
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="navigation__hamburger-icon">&#9776;</span>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link href="/get-started">
            <a className="navigation__link">Get Started</a>
          </Link>
        </li>
        <ul className="navigation__list--nested">
          <li className="navigation__item--nested">
            <Link href="/get-started/quickstart-rules">
              <a className="navigation__link--nested">Quickstart Rules</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/get-started/resources">
              <a className="navigation__link--nested">Resources</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/get-started/pricing">
              <a className="navigation__link--nested">Pricing</a>
            </Link>
          </li>
        </ul>
        <li className="navigation__item">
          <Link href="/rules">
            <a className="navigation__link">Rules</a>
          </Link>
        </li>
        <ul className="navigation__list--nested">
          <li className="navigation__item--nested">
            <Link href="/rules/player-rules">
              <a className="navigation__link--nested">Player Rules</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/rules/cc-rules">
              <a className="navigation__link--nested">CC Rules</a>
            </Link>
          </li>
        </ul>
        <li className="navigation__item">
          <Link href="/explore">
            <a className="navigation__link">Explore Avarice</a>
          </Link>
        </li>
        <ul className="navigation__list--nested">
          <li className="navigation__item--nested">
            <Link href="/explore/races">
              <a className="navigation__link--nested">Races</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/explore/classes">
              <a className="navigation__link--nested">Classes</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/explore/suronis">
              <a className="navigation__link--nested">S.U.R.O.N.I.S.</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/explore/world">
              <a className="navigation__link--nested">World</a>
            </Link>
          </li>
        </ul>
        <li className="navigation__item">
          <Link href="/digital-tools">
            <a className="navigation__link">Digital Tools</a>
          </Link>
        </li>
        <ul className="navigation__list--nested">
          <li className="navigation__item--nested">
            <Link href="/digital-tools/avarice-sheets">
              <a className="navigation__link--nested">Avarice Sheets</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/digital-tools/avarice-database">
              <a className="navigation__link--nested">Avarice Database</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/digital-tools/pdfs">
              <a className="navigation__link--nested">PDFS</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/digital-tools/ebooks">
              <a className="navigation__link--nested">Ebooks</a>
            </Link>
          </li>
        </ul>
        <li className="navigation__item">
          <Link href="/community">
            <a className="navigation__link">Community</a>
          </Link>
        </li>
        <ul className="navigation__list--nested">
          <li className="navigation__item--nested">
            <Link href="/community/blog">
              <a className="navigation__link--nested">Blog</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/community/forum">
              <a className="navigation__link--nested">Forum</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/community/writers-guild">
              <a className="navigation__link--nested">Writers Guild</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/community/social-media">
              <a className="navigation__link--nested">Social Media</a>
            </Link>
          </li>
          <li className="navigation__item--nested">
            <Link href="/community/support">
              <a className="navigation__link--nested">Help &amp; Support</a>
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default Navigation
