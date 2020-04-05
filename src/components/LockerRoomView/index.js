import React from "react"
import View from "../View"
import { getCurrentUser } from "../../utils/auth"

const LockerRoomView = () => {
  const { name, username, email } = getCurrentUser()

  return (
    <View heading="Locker Room">
      <p>{name}'s Team</p>
      <p>
        TODO pull up a yahoo team?

        pull some stats?
      </p>
    </View>
  )
}

export default LockerRoomView