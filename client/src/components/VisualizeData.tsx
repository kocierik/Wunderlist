/* eslint-disable no-undef */
/* eslint-disable no-console */
import { useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"
// eslint-disable-next-line import/extensions
import { SpotifyLoginResponse } from "../types"

// const PLAYLIST_ENDPOINT = "http://localhost:8888/artist"
const USER_ENDPOINT = "http://localhost:8888/user"

type Props = {
  token: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const VisualizeData = ({ token }: Props) => {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<SpotifyLoginResponse>({})
  const handleTrack = () => {
    axios
      .get(USER_ENDPOINT, {
        headers: {
          Authorizazion: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Button onClick={handleTrack}>
      {data?.token?.body !== undefined ? data.token.body.email : "ok"}
    </Button>
  )
}

export default VisualizeData
