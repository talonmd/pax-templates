import Link from "next/link"

import Layout from "../layout/Layout"
import PageNavigation from "../components/PageNavigation"
import PageContent from "../components/PageContent"

export default function Home() {
  return (
    <Layout headline="Index" cookieTrail="" imagePath="" pageNav="home">
      <PageNavigation>
        <ul>
          <li>Quickstart Rules</li>

          <ul>
            <li>Rules</li>
            <li>Races</li>
            <li>Classes</li>
            <li>SURONIS</li>
          </ul>
          <li>Resources</li>
          <ul>
            <li>Avarice Sheets</li>
            <li>PDFS</li>
          </ul>
          <li>Pricing</li>
        </ul>
      </PageNavigation>
      <PageContent>
        <h2 class="main__headline">Main Content Headline</h2>
        <p class="main__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        {/* <svg style="fill: black">
                <use xlink:href="/img/avarice-logotype-black.svg"></use>
              </svg> */}
        <h3>H3 Headline Example</h3>
        <h4>H4 Headline Example</h4>
        <h5>H5 Headline Example</h5>
        <h6>H6 Headline Example</h6>
        <button>Button Example</button>
        <a href="#">Text link example</a>
        <p>UL Example</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <p>OL Example</p>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ol>
        {/* <figure>
                <img src="./img/apa-class.png" alt="test" />
                <figcaption>Figure caption example</figcaption>
              </figure> */}
        <blockquote>Blockquote Example</blockquote>
        <p class="main__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div class="main__cards-container">
          <h2 class="cards-container__headline">Cards Container Headline</h2>
          <p class="main__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <div class="card">
            <div class="card__header">
              <h3 class="card__headline">Title of Card</h3>
            </div>
            <div class="card__info card__info--hidden">
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...
              </p>
              <button class="card__button">Learn More</button>
            </div>
            <div class="card__footer"></div>
          </div>

          <div class="card">
            <div class="card__header">
              <h3 class="card__headline">Title of Card</h3>
            </div>
            <div class="card__info">
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...
              </p>
              <button class="card__button">Learn More</button>
            </div>
            <div class="card__footer"></div>
          </div>

          <div class="card">
            <div class="card__header">
              <h3 class="card__headline">Title of Card</h3>
            </div>
            <div class="card__info card__info--hidden">
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ...
              </p>
              <button class="card__button">Learn More</button>
            </div>
            <div class="card__footer"></div>
          </div>
        </div>
      </PageContent>
    </Layout>
  )
}
