import React from "react"
import "../style/main.scss"
import Header from "./header"
import Footer from "./footer"
import Content from "./content"
import Info from "./info"

function App2() {
  return (
    <div className="container">
      <Header />

      <div className="content_main">
        <Content />
        <Info />
      </div>

      <Footer />
    </div>
  )
}

export default App2
