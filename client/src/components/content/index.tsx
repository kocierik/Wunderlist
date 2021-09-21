/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { createUserProfileDocument } from "../../db/firebase"
import "./index.scss"
import { tokenContext } from "../../provider/tokenContext"
import { userContext } from "../../provider/userContext"
// eslint-disable-next-line import/no-unresolved
import VisualizeData from "../visualizeData"

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [token, setToken] = useContext<any>(tokenContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useContext<any>(userContext)
  // const [data, setData] = useState<SpotifyLoginResponse>({})
  const handleTrack = async (tokenAuth: string, API_ENDPOINT: string) => {
    axios
      .get(API_ENDPOINT, {
        headers: {
          Authorizazion: `Bearer ${tokenAuth}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data)
        const dataUser = {
          id: response.data.body.id,
          email: response.data.body.email,
          country: response.data.body.country,
          photoURL: response.data.body.images[0].url,
          topTracks: [{}],
        }
        createUserProfileDocument(dataUser)
      })
      .catch((error) => {
        console.log(error)
      })
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
      handleTrack(authURI.access_token, USER_ENDPOINT)
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
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default content
