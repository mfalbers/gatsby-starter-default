import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"
import styles from "./status.module.css"
import Emoji from "../../utils/emoji"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p className={styles[`status__text`]}>
        <Emoji symbol="🎟" label="Log In"/>
        {` `}
        <Link to="/app/login">Log In</Link>.
      </p>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <p className={styles[`status__text`]}>
        {name} ({email})
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
        <Emoji symbol="🔌" label="Log Out"/>log out
        </a>
      </p>
    )
  }

  return <div className={styles.status}>{details}</div>
}