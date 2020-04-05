import React from "react"

import Layout from "../components/Layout"
import HomeView from "../components/HomeView"
import SignupForm from "../components/SignupForm"

const IndexPage = () => (
  <Layout pageTitle="Home">
    <HomeView />
    <SignupForm />
  </Layout>
)

export default IndexPage
