import React from "react"

const Navigation = () => {
  return (
    <nav class="navigation">
      <span className="navigation__hamburger-icon">&#9776;</span>
      <ul class="navigation__list">
        <li class="navigation__item">
          {/* <img src="/assets/svg/home.svg" alt="" className="navigation__icon" /> */}
          <a href="#" class="navigation__link">
            Get Started
          </a>
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Quickstart Rules
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Resources
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Pricing
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <img src="/assets/svg/flow-tree.svg" alt="" className="navigation__icon" /> */}
          <a href="#" class="navigation__link">
            Rules
          </a>
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Player
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              CC
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <img src="/assets/svg/spreadsheet.svg" alt="" className="navigation__icon" /> */}
          <a href="#" class="navigation__link">
            Explore Avarice
          </a>
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Races
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Classes
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              S.U.R.O.N.I.S.
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              World
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <img src="/assets/svg/book.svg" alt="" className="navigation__icon" /> */}
          <a href="#" class="navigation__link">
            Digital Tools
          </a>
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Avarice Sheets
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Avarice Database
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              PDFS
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Ebooks
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <img src="/assets/svg/unread.svg" alt="" className="navigation__icon" /> */}
          <a href="#" class="navigation__link">
            Community
          </a>
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Blog
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Forum
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Writers Guild
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Social Media
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Q&amp;A
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Help &amp; Support
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default Navigation
