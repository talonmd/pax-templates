import React from "react"

const PageHeader = () => {
  return (
    <div class="page-header">
      <div class="sec-header__hero-image"></div>
      <div class="sec-header__header-box">
        <h1 class="sec-header__headline">Page Title Headline</h1>
        <div class="sec-header__breadcrumb-box">
          <ul class="sec-header__breadcrumb-list">
            <li class="sec-header__breadcrumb-item">
              <a href="#" class="sec-header__breadcrumb-link">
                Page Title
              </a>
            </li>
            <li class="sec-header__breadcrumb-item">
              <a href="#" class="sec-header__breadcrumb-link">
                Page Title
              </a>
            </li>
            <li class="sec-header__breadcrumb-item">
              <a href="#" class="sec-header__breadcrumb-link">
                Page Title
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
