import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
// import Details from "../components/Details"
import Login from "../components/Login"
// import Default from "../components/Default"
import PrivateRoute from "../components/privateroute"
import Status from "../components/Status"

const App = () => {
  return (
    <Layout>
        <Status />
        <Router basepath="/app">
            {/* <PrivateRoute path="/dashboard" component={Dashboard} />   */}
            {/* <PrivateRoute path="/details" component={Details} /> */}
            <PrivateRoute path="/profile" component={Profile} />
            <Login path="/login" />
            {/* <Default path="/" /> */}
        </Router>
    </Layout>
  )
}

export default App