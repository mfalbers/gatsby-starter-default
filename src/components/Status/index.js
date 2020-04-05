import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"
import styles from "./status.module.css"
import Emoji from "../../utils/emoji"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <div className={styles.status}>
        <p className={styles[`game__nav`]}></p>
        <p className={styles[`status__text`]}>
          <Link to="/app/login">Head Coach Log In</Link>
          {` `}
          <Emoji symbol="👨🏻‍💼" label="Log In"/>
        </p>
      </div>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <div className={styles.status}>
        <p className={styles[`game__nav`]}>
          <Link to="/app/locker-room">Locker Room</Link>
          {` | `}
          <Link to="/app/profile">Coach's Office</Link>
        </p>
        <p className={styles[`status__text`]}>
          <strong>Coach {name}</strong> ({email})
          {` `}
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
          log out
          </a>{` `}<Emoji symbol="🔌" label="pull the plug"/>
        </p>
      </div>
    )
  }

  return details
}