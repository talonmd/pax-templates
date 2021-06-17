import Link from "next/link"

const NestedNavigationList = ({ filePath, listItems }) => (
  <ul className="navigation__list--nested">
    {listItems.map(({ page }, index) => {
      // page is retured as a string "Page Title | page-slug"
      // split on the ' | ' to get the page tile and slug separately
      const data = page.split(" | ")
      return (
        <Link key={index} href={`/${filePath}/${data[1]}`}>
          <li className="navigation__item--nested">
            <a className="navigation__link--nested">{data[0]}</a>
          </li>
        </Link>
      )
    })}
  </ul>
)

export default NestedNavigationList
