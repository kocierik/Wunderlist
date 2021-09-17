/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"

const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const visualizeData = () => {
  const [token, setToken] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({})
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"))
    }
  }, [])

  const handleTrack = () => {
    axios
      .get(PLAYLIST_ENDPOINT, {
        headers: {
          Authorizazion: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error()
        console.log(error)
      })
    console.log(data)
  }

  return <Button onClick={handleTrack}>get Artist</Button>
}

export default visualizeData
