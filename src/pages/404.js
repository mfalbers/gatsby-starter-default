import React from "react"

import View from "../components/View"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <View title="Sorry, File Not Found">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </View>
)

export default NotFoundPage
