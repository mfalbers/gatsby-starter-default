import React from "react"
import PropTypes from "prop-types"
import styles from "./view.module.css"

const View = ({ heading, children }) => (
  <section className={styles.view}>
    <h2 className={styles[`view__heading`]}>{heading}</h2>
    {children}
  </section>
)

View.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default View