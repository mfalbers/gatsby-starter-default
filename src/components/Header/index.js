import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          className={`${styles[`header__link`]} ${
            styles[`header__link--home`]
          }`}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
          <nav role="main" className={styles[`header__nav`]}>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`
                  }}
                >
                  <Link to={link.link} className={styles[`header__link`]}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
