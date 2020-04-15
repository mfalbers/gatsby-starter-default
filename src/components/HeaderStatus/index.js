import React from "react"
import { Link } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"
import Button from 'react-bootstrap/Button';
import Navbar, { NavbarText } from 'react-bootstrap/Navbar';
import { FiLogIn, FiLogOut } from 'react-icons/fi'

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <Link to="/app/login"><Button variant="success" size="sm">Log In <FiLogIn/></Button></Link>
    )
  } else {
    const { name, username } = getCurrentUser()

    details = (
      <Navbar.Text>Signed in as: <Link to="/app/profile">Coach {name}</Link> ({username})</Navbar.Text> 
    )
  }

  return details
}