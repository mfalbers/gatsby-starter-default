import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"
import styles from "./status.module.css"
import { GiBasketballBasket } from "react-icons/gi";
import { FaRegClipboard } from 'react-icons/fa'
import { GoJersey } from 'react-icons/go'
import { FiLogIn, FiLogOut } from 'react-icons/fi'

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <div className={styles.status}>
        <p className={styles[`game__nav`]}></p>
        <p className={styles[`status__text`]}>
          {/* <Link to="/app/login">Head Coach Log In <FiLogIn/></Link> */}
        </p>
      </div>
    )
  } else {
    const { name, username } = getCurrentUser()

    details = (
      <div className={styles.status}>
        <p className={styles[`game__nav`]}>
        <GiBasketballBasket/>{` `}<Link to="/app/gym">Gym</Link>
          {` | `}
          <GoJersey/>{` `}<Link to="/app/locker-room">Locker Room</Link>
          {` | `}
          <FaRegClipboard/>{` `}<Link to="/app/profile">Coach's Office</Link>
        </p>
        <p className={styles[`status__text`]}>
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
          log out <FiLogOut/>
          </a>
        </p>
      </div>
    )
  }

  return details
}