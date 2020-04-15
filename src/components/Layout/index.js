/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Status from "../Status"
import SEO from "../../utils/seo"

// Global styles and component-specific styles.
import styles from "./main.module.css"
import Emoji from "../../utils/emoji"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    // TODO empty tag <></> makes header across whole page
    <>
    {/* <div className="container"> */}
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
      <Status />
      <div className={styles.site}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()} <Link to="/about">{data.site.siteMetadata.title}</Link>, Built with
          {` `}
          <Emoji symbol="⛹️‍♀️⛹️‍♂️" label="hustle" />
        </footer>
      </div>
    {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Layout
