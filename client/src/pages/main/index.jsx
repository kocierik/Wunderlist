/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Header from "../../components/header"
import Footer from "../../components/footer"
import Content from "../../components/content"
import Info from "../../components/info"
import "./index.scss"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
