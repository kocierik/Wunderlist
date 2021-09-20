/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import "../style/main.scss"
import { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Content from "./content"
import Info from "./info"
import { tokenContext } from "../tokenContext"
import { userContext } from "../userContext"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App2() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState("")
  return (
    <div className="container">
      <tokenContext.Provider value={[token, setToken]}>
        <userContext.Provider value={[user, setUser]}>
          <Header />
          <div className="content_main">
            <Content />
            <Info />
          </div>
        </userContext.Provider>
      </tokenContext.Provider>
      <Footer />
    </div>
  )
}

export default App2
