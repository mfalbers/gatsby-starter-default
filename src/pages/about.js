import React from "react"

import Layout from "../components/Layout"
import Image from "../components/image"
import View from "../components/View"
import mainGIF from '../images/ehoops_logo.gif'

const AboutPage = () => (
  <Layout pageTitle="About">
    <View heading="About Us">
      <p>e-hoops is an online basketball simulator, where users can create teams and simulate games with real stats.</p>
      <img src={mainGIF} alt="e-hoops.com coming soom" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </View>
  </Layout>
)

export default AboutPage