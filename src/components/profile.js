import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Profile = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <View title="Your Profile">
      <p>Welcome back {name}!</p>
      <p>
        DEV NOTE: This is a client-only route. You could set up a form to save information
        about a user here.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
        <li>Legal name: {legalName}</li>
        <li>Email address: {email}</li>
      </ul>
    </View>
  )
}

export default Profile