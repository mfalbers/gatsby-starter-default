import React from "react"

import Layout from "../components/Layout"
import Status from "../components/Status"
import SEO from "../components/seo"
import mainGIF from '../images/ehoops_logo.gif'

const IndexPage = () => (
  <Layout>
    <Status />
    <SEO title="Home" />
    <h1>Welcome ballers!</h1>
    <p>This is an online basketball simulator, where users can create teams and simulate games with real stats.</p>
    <img src={mainGIF} alt="e-hoops.com coming soom" />
  </Layout>
)

export default IndexPage
