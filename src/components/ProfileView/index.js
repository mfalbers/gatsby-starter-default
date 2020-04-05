import React from "react"
import View from "../View"
import { getCurrentUser } from "../../utils/auth"

const ProfileView = () => {
  const { name, username, email } = getCurrentUser()

  return (
    <View heading="Head Coach's Office">
      <p>Welcome back Coach {name}!</p>
      <p>Here's the current info we have for your profile.</p>
      <ul>
        <li>Preferred Name: <code>{name}</code></li>
        <li>Username: <code>{username}</code></li>
        <li>Email address: <code>{email}</code></li>
      </ul>
    </View>
  )
}

export default ProfileView