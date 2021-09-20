/* eslint-disable no-console */
/* eslint-disable no-undef */
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { createUserProfileDocument } from "../firebase"
import "../style/content.scss"
import VisualizeData from "./visualizeData"

const { REACT_APP_CLIENT_ID } = process.env
const { REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT } = process.env
const { REACT_APP_REDIRECT_URL_AFTER_LOGIN } = process.env
const USER_ENDPOINT = "http://localhost:8888/user"

const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
]
const SCOPES_URL_PARAM = SCOPES.join("%20")

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1)
  const paraInUrl = stringAfterHashtag.split("&")
  const paramSplitUp = paraInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=")
    // eslint-disable-next-line no-param-reassign
    accumulater[key] = value
    return accumulater
  }, {})
  return paramSplitUp
}

const content = () => {
  const [sign, onSign] = useState(true)
  const [data, setData] = useState({})

  const handleTrack = async (token) => {
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
        const dataUser = {
          id: response.data.body.id,
          email: response.data.body.email,
          country: response.data.body.country,
          photoURL: response.data.body.images[0].url,
        }
        createUserProfileDocument(dataUser)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleLogin = async () => {
    if (sign) {
      onSign(false)
      setData({})
    } else {
      onSign(true)
      window.location = `${REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    }
  }

  useEffect(() => {
    if (window.location.hash) {
      const authURI = getReturnedParamsFromSpotifyAuth(window.location.hash)
      handleTrack(authURI.access_token)
    }
  }, [])

  return (
    <div className="content">
      <Box
        sx={{
          pt: 8,
          pb: 50,
        }}
        p={0}
      >
        <Container maxWidth="25%">
          <Typography
            component="h2"
            variant="h2"
            align="center"
            color="white"
            fontFamily="sans-serif"
            gutterBottom
          >
            Wunderlist
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="white"
            paragraph
            fontStyle="italic"
            fontFamily="sans serif"
          >
            <div className="typewriter"> listen together.</div>
          </Typography>
          <Stack
            sx={{ pt: 3 }}
            direction="row"
            spacing={3}
            justifyContent="center"
          >
            <Button
              variant="contained"
              bgcolor="white"
              sx={{ bgcolor: "#1DB954" }}
              onClick={handleLogin}
            >
              {sign ? "log out" : "sign up with spotify"}
            </Button>
            <VisualizeData token={data} />
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default content
