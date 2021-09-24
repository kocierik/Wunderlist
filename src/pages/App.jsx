import { Route, Switch } from "react-router-dom"
import { useState } from "react"
import Main from "./main/index"
// eslint-disable-next-line import/extensions
import Dashboard from "./userProfile"
// eslint-disable-next-line import/extensions
import { tokenContext } from "../provider/tokenContext"
// eslint-disable-next-line import/extensions
import { userContext } from "../provider/userContext"

const App = () => {
  const [token, setToken] = useState("")
  const [user, setUser] = useState("")
  return (
    <Switch>
      <tokenContext.Provider value={[token, setToken]}>
        <userContext.Provider value={[user, setUser]}>
          <Route exact path="/" component={Main} />
          <Route exact path="/dashBoard" component={Dashboard} />
        </userContext.Provider>
      </tokenContext.Provider>
    </Switch>
  )
}

export default App
