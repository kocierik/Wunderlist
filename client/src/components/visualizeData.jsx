/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"

const PLAYLIST_ENDPOINT = "http://localhost:8888/artist"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const visualizeData = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({})

  const token = localStorage.getItem("accessToken")
  const handleTrack = () => {
    axios
      .get(PLAYLIST_ENDPOINT, {
        headers: {
          Authorizazion: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        crossDomain: true,
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(data)
  }

  return <Button onClick={handleTrack}>get Artist</Button>
}

export default visualizeData
