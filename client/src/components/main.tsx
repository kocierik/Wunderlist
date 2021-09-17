/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import "../style/main.scss"
import Header from "./header"
import Footer from "./footer"
import Content from "./content"
import Info from "./info"

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
