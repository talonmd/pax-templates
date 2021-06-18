import Link from "next/link"

const NestedNavigationList = ({ folderSlug, pages }) => (
  <ul className="navigation__list--nested">
    {pages.map((page, index) => {
      return (
        <Link key={index} href={`/${folderSlug}/${page.slug}`}>
          <li className="navigation__item--nested">
            <a className="navigation__link--nested">{page.name}</a>
          </li>
        </Link>
      )
    })}
  </ul>
)

export default NestedNavigationList
