/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useContext, useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Content from "../../components/content"
import Info from "../../components/info"
import "./index.scss"
import { userContext } from "../../provider/userContext"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App2() {
  const [user, setUser] = useContext(userContext)
  return user ? (
    <div className="container">
      <Header />
      <div className="content_main">
        <Content />
        <Info />
      </div>
      <Footer />
    </div>
  ) : (
    <div className="container">
      <Header />
      <div className="content_main">
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App2
