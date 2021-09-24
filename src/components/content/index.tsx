/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { createUserProfileDocument } from "../../db/firebase"
import "./index.scss"
import { tokenContext } from "../../provider/tokenContext"
import { userContext } from "../../provider/userContext"

const { REACT_APP_CLIENT_ID } = process.env
const { REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT } = process.env
const { REACT_APP_REDIRECT_URL_AFTER_LOGIN } = process.env
const USER_ENDPOINT = "https://api.spotify.com/v1/me"

const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
  "user-read-email",
  "user-read-private",
]
const SCOPES_URL_PARAM = SCOPES.join("%20")

interface Dict<T> {
  [Key: string]: T
}

const getReturnedParamsFromSpotifyAuth = (hash: string) => {
  const stringAfterHashtag = hash.substring(1)
  const paraInUrl = stringAfterHashtag.split("&")

  const paramSplitUp = paraInUrl.reduce(
    (accumulater: Dict<string>, currentValue) => {
      const [key, value] = currentValue.split("=")
      // eslint-disable-next-line no-param-reassign
      accumulater[key] = value
      return accumulater
    },
    {}
  )
  return paramSplitUp
}

const content = () => {
  const [sign, onSign] = useState(true)
  const history = useHistory()
  const [token, setToken] = useContext(tokenContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useContext(userContext)

  const handleTrack = async () => {
    try {
      const response = await fetch(USER_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const value = await response.json()
      console.log(value)
      const dataUser = {
        id: value.id,
        email: value.email,
        country: value.country,
        topTracks: [{}],
        // photoURL: response.data.body.images[0]?.url,
      }
      createUserProfileDocument(dataUser)
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = () => {
    if (sign) {
      onSign(false)
      setData("")
      history.push("/")
    } else {
      onSign(true)
      window.location.href = `${REACT_APP_SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    }
  }
  useEffect(() => {
    if (window.location.hash) {
      const authURI = getReturnedParamsFromSpotifyAuth(window.location.hash)
      setToken(authURI.access_token)
      localStorage.setItem("token", authURI.access_token)
    }
    console.log(token)
  }, [window.location.hash])

  useEffect(() => {
    const authURI = localStorage.getItem("token")
    if (authURI) {
      setToken(authURI)
    } else {
      console.log("need to login...")
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
        <Container>
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
              sx={{ bgcolor: "#1DB954" }}
              onClick={() => handleLogin()}
            >
              {sign ? "log out" : "sign up with spotify"}
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#1DB954" }}
              onClick={() => handleTrack()}
            >
              ciao
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default content
