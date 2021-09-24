import React, { useEffect, useState } from "react"
import { authEndpoint, clientId, redirectUri, scopes } from "./config"
import urlHash from "./hash"
import logo from "./logo.svg"
import "./App.css"

const LOGIN_URL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`

const App = () => {
  const [token, setToken] = useState()

  const makeRandomApiRequest = async (token) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const onClick = () => {
    makeRandomApiRequest()
  }

  useEffect(() => {
    // ogni volta che ti logghi entra qui
    const _token = urlHash.access_token
    setToken(_token)
    localStorage.setItem("token", _token)
  }, [urlHash])

  useEffect(() => {
    const _token = localStorage.getItem("token")
    if (_token) {
      setToken(_token)
    } else {
      console.log("non eri loggato ti devi loggare")
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!token ? (
          <a className="btn btn--loginApp-link" href={LOGIN_URL}>
            Login to Spotify
          </a>
        ) : (
          <button onClick={onClick}>MAKE RANDOM REQUEST </button>
        )}
      </header>
    </div>
  )
}

export default App
