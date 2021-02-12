import React, { useState } from "react"
import Link from "next/link"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="closed-bar">
        <span
          className="navigation__hamburger-icon"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          &#9776;
        </span>
      </div>
      <nav className={`navigation ${!isOpen ? "closed" : ""}`}>
        <ul className="navigation__list">
          <Link href="/get-started">
            <li className="navigation__item">
              <a className="navigation__link">Get Started</a>
            </li>
          </Link>

          <ul className="navigation__list--nested">
            <Link href="/get-started/about-avarice">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">About Avarice</a>
              </li>
            </Link>

            <Link href="/get-started/quickstart-rules">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Quickstart Rules</a>
              </li>
            </Link>

            <Link href="/get-started/resources">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Resources</a>
              </li>
            </Link>

            <Link href="/get-started/pricing">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Pricing</a>
              </li>
            </Link>
          </ul>

          <Link href="/rules">
            <li className="navigation__item">
              <a className="navigation__link">Rules</a>
            </li>
          </Link>

          <ul className="navigation__list--nested">
            <Link href="/rules/player-rules">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Player Rules</a>
              </li>
            </Link>

            <Link href="/rules/cc-rules">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">CC Rules</a>
              </li>
            </Link>
          </ul>

          <Link href="/explore">
            <li className="navigation__item">
              <a className="navigation__link">Explore Avarice</a>
            </li>
          </Link>

          <ul className="navigation__list--nested">
            <Link href="/explore/races">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Races</a>
              </li>
            </Link>

            <Link href="/explore/classes">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Classes</a>
              </li>
            </Link>

            <Link href="/explore/suronis">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">S.U.R.O.N.I.S.</a>
              </li>
            </Link>

            <Link href="/explore/world">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">World</a>
              </li>
            </Link>
          </ul>

          <Link href="/digital-tools">
            <li className="navigation__item">
              <a className="navigation__link">Digital Tools</a>
            </li>
          </Link>

          <ul className="navigation__list--nested">
            <Link href="/digital-tools/avarice-sheets">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Avarice Sheets</a>
              </li>
            </Link>

            <Link href="/digital-tools/avarice-database">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Avarice Database</a>
              </li>
            </Link>

            <Link href="/digital-tools/pdfs">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">PDFS</a>
              </li>
            </Link>

            <Link href="/digital-tools/ebooks">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Ebooks</a>
              </li>
            </Link>
          </ul>

          <Link href="/community">
            <li className="navigation__item">
              <a className="navigation__link">Community</a>
            </li>
          </Link>

          <ul className="navigation__list--nested">
            <Link href="/community/blog">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Blog</a>
              </li>
            </Link>

            <Link href="/community/forum">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Forum</a>
              </li>
            </Link>

            <Link href="/community/writers-guild">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Writers Guild</a>
              </li>
            </Link>

            <Link href="/community/social-media">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Social Media</a>
              </li>
            </Link>

            <Link href="/community/support">
              <li className="navigation__item--nested">
                <a className="navigation__link--nested">Help &amp; Support</a>
              </li>
            </Link>
          </ul>
        </ul>
      </nav>
      <div className="navigation-footer"></div>
    </>
  )
}

export default Navigation
