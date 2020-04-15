import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import ProfileView from "../components/ProfileView"
import Login from "../components/Login"
import PrivateRoute from "../components/privateroute"
import HomeView from "../components/HomeView"
import LockerRoomView from "../components/LockerRoomView"
import GymView from "../components/GymView"

const App = () => {
  return (
    <Layout pageTitle="Home">
        <Router basepath="/app">
            <PrivateRoute path="/gym" component={GymView} /> 
            <PrivateRoute path="/locker-room" component={LockerRoomView} />  
            <PrivateRoute path="/profile" component={ProfileView} />
            <Login path="/login" />
            <HomeView path="/" />
        </Router>
    </Layout>
  )
}

export default App