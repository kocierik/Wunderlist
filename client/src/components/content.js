/* eslint-disable no-undef */
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import React, { useEffect } from "react"
import "../style/content.scss"
import VisualizeData from "./visualizeData"

const CLIENT_ID = "e198f93827f7494e8a03dad4472ea626"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/"

const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
]
const SCOPES_URL_PARAM = SCOPES.join("%20")

const gerReturnedParamsFromSpotifyAuth = (hash) => {
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

const handleLogin = () => {
  window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
}
function content() {
  useEffect(() => {
    if (window.location.hash) {
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line camelcase
      const auth = gerReturnedParamsFromSpotifyAuth(window.location.hash)
      localStorage.clear()
      localStorage.setItem("accessToken", auth.access_token)
      localStorage.setItem("tokenType", auth.token_type)
      localStorage.setItem("expiresIn", auth.expires_in)
    }
  })

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
            <Button variant="contained" bgcolor="white" onClick={handleLogin}>
              sign up
            </Button>
            <VisualizeData />
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default content
