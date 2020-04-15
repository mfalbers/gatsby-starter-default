import React from "react"

import Layout from "../components/Layout"
import Image from "../utils/image"
import View from "../components/View"
import mainGIF from '../images/ehoops_logo.gif'

const AboutPage = () => (
  <Layout pageTitle="About">
    <View heading="About">
      <p><strong>e-hoops.com</strong> originated as a senior project at Cal Poly, San Luis Obispo in the late 90's. It was built as an <strong>online basketball simulator</strong>, 
        where users could <strong>create teams</strong> and <strong>simulate basketball games</strong> to analyze outcomes via box scores.
      </p>
      <p>The proprietery algorithms allowed for coaches to register, choose a team of <strong>real players</strong> with <strong>real stats</strong> to simulate basketball games.</p>
      <p>The original technology used was ASP pages with a SQL Server backend.</p>
      <p>Below is the original image once I took the site down to refactor to newer technologies. It remained this way for 20+ years. Until now!</p>
      <div className="text-center"><img src={mainGIF} alt="e-hoops.com coming soom" align="center" /></div>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </View>
  </Layout>
)

export default AboutPage