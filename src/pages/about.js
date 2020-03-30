import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <p>e-hoops is an online basketball simulator, where users can create teams and simulate games with real stats.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage