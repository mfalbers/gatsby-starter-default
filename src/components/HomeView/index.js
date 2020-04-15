import React from "react"

import View from "../View"
import Alert from 'react-bootstrap/Alert'

const HomeView = () => (
  <View heading="Welcome ballers!">
    <Alert variant="primary">
      This is an online basketball simulator, where users can create teams and simulate games with real stats.
    </Alert>
  </View>
)

export default HomeView
