import React from "react"

const Header = () => {
  return (
    <header class="header">
      <div class="header__left-side">
        <div class="header__logo">
          <img src="/img/avarice-logotype-black.svg" alt="pax logo" class="header__logo-image" />
          <span class="header__logo-headline">avarice</span>
        </div>
      </div>

      <div class="header__right-side">
        <div class="header__notifications">
          {/* <svg class="header__notifications-icon">
          <use xlink:href="img/sprite.svg#icon-chat"></use>
        </svg> */}
          <span class="header__notifications-alert">4</span>
        </div>
        <div class="header__profile">
          <img src="/img/temp-user.jpg" alt="user profile photo" class="header__profile-icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
