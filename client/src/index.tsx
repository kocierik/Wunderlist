/* eslint-disable import/no-unresolved */
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
// eslint-disable-next-line import/extensions
import App from "./pages/App"

// eslint-disable-next-line no-undef
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
