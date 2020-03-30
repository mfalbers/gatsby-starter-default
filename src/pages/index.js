import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Status from "../components/Status"
import Image from "../components/image"
import SEO from "../components/seo"
import mainGIF from '../images/ehoops_logo.gif'

const IndexPage = () => (
  <Layout>
    <Status />
    <SEO title="Home" />
    <h1>Welcome ballers!</h1>
    <p>This is an online basketball simulator, where users can create teams and simulate games with real stats.</p>
    <img src={mainGIF} alt="e-hoops.com coming soom" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to page About</Link>
  </Layout>
)

export default IndexPage
