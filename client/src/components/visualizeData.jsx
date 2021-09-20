/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"

// const PLAYLIST_ENDPOINT = "http://localhost:8888/artist"
const USER_ENDPOINT = "http://localhost:8888/user"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const visualizeData = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({})
  const token = localStorage.getItem("accessToken")
  const handleTrack = () => {
    axios
      .get(USER_ENDPOINT, {
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
    if (data.body !== undefined) console.log(data.body)
  }

  return (
    <Button onClick={handleTrack}>
      {props.token.body !== undefined ? props.token.body.email : "ok"}
    </Button>
  )
}

export default visualizeData
