import React from "react"

const Navigation = () => {
  return (
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          {/* <svg class="navigation__icon">
                  <use xlink:href="img/sprite.svg#icon-home"></use>
                </svg> */}
          <a href="#" class="navigation__link">
            Home
          </a>
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r1">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg>
                <svg class="navigation__icon--arrow navigation__icon--arrow-r2">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              About
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Rules
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Blog
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <svg class="navigation__icon">
                  <use xlink:href="img/sprite.svg#icon-flow-tree"></use>
                </svg> */}
          <a href="#" class="navigation__link">
            Races
          </a>
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r1">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg>
                <svg class="navigation__icon--arrow navigation__icon--arrow-r2">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Playable
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Unplayable
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Beasts
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <svg class="navigation__icon">
                  <use xlink:href="img/sprite.svg#icon-spreadsheet"></use>
                </svg> */}
          <a href="#" class="navigation__link">
            Classes
          </a>
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r1 none">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg>
                <svg class="navigation__icon--arrow navigation__icon--arrow-r2 none">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
        </li>
        <li class="navigation__item">
          {/* <svg class="navigation__icon">
                  <use xlink:href="img/sprite.svg#icon-book"></use>
                </svg> */}
          <a href="#" class="navigation__link">
            Items
          </a>
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r1">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg>
                <svg class="navigation__icon--arrow navigation__icon--arrow-r2">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Weapons
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Armour
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Items
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Consumables
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Currency
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Friends
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <svg class="navigation__icon">
                  <use xlink:href="img/sprite.svg#icon-network"></use>
                </svg> */}
          <a href="#" class="navigation__link">
            World
          </a>
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r1">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg>
                <svg class="navigation__icon--arrow navigation__icon--arrow-r2">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              History
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Organizations
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Map
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Places
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              People
            </a>
          </li>
        </ul>
        <li class="navigation__item">
          {/* <svg class="navigation__icon">
                  <use xlink:href="img/sprite.svg#icon-unread"></use>
                </svg> */}
          <a href="#" class="navigation__link">
            Forum
          </a>
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r1 none">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r2 none">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
        </li>
        <li class="navigation__item">
          {/* <svg class="navigation__icon">
                  <use xlink:href="img/sprite.svg#icon-laptop"></use>
                </svg> */}
          <a href="#" class="navigation__link">
            Play
          </a>
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r1">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
          {/* <svg class="navigation__icon--arrow navigation__icon--arrow-r2">
                  <use xlink:href="img/sprite.svg#icon-chevron-small-right"></use>
                </svg> */}
        </li>
        <ul class="navigation__list--nested">
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Sheets
            </a>
          </li>
          <li class="navigation__item--nested">
            <a href="#" class="navigation__link--nested">
              Database
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  )
}

export default Navigation
