require('dotenv').config()
const SpotifyWebApi = require("spotify-web-api-node")
const express = require("express")
var cors = require('cors')

const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
]


const spotifyApi = new SpotifyWebApi({
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})


const app = express()
app.use(cors())
app.get("/login", (req, res ) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes))
})

app.get("/user", async (req , res) => {
  const dataUser = await spotifyApi.getMe()
  console.log("dataUser", dataUser)
  res.send(dataUser)
})

app.get("/topTrack", async (req, res) => {
  const topTrack = await spotifyApi.getMyTopTracks()
  console.log("top track: ", topTrack)
  res.send(topTrack)
})

app.get("/artist", async (req, res) => {
  const artist = await spotifyApi.getMyCurrentPlayingTrack()
  console.log("artist", artist)
  res.send(artist)
})


// interface DataCallBack {
//   body : {
//     access_token: string
//     refresh_token: string
//     expires_in: number
//   }
// }

app.get("/callback", (req, res) => {
  const { error } = req.query
  const { code } = req.query
  const { state } = req.query

  if (error) {
    console.error("Callback Error:", error)
    res.send(`Callback Error: ${error}`)
    return
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const { access_token } = data.body
      const { refresh_token } = data.body
      const { expires_in } = data.body

      spotifyApi.setAccessToken(access_token)
      spotifyApi.setRefreshToken(refresh_token)

      console.log("access_token:", access_token)
      console.log("refresh_token:", refresh_token)

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      )
      res.send("Success! You can now close the window.")

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken()
        const { access_token } = data.body

        console.log("The access token has been refreshed!")
        console.log("access_token:", access_token)
        spotifyApi.setAccessToken(access_token)
      }, (expires_in / 2) * 1000)
    })
    .catch((error) => {
      console.error("Error getting Tokens:", error)
      res.send(`Error getting Tokens: ${error}`)
    })
})



app.listen(8888, () =>
  console.log(
    "HTTP Server up. Now go to http://localhost:8888/login in your browser."
  )
)



