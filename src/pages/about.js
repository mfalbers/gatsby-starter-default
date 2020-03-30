import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <p>e-hoops is an online basketball simulator, where users can create teams and simulate games with real stats.</p>
    <Link to="/">Go back to the homepage</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default AboutPage