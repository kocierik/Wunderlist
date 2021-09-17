const SpotifyWebApi = require("spotify-web-api-node")
const express = require("express")

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
  redirectUri: "http://localhost:8888/callback",
  clientId: "e198f93827f7494e8a03dad4472ea626",
  clientSecret: "78d98db5bc534d6db7772534dfec9fd5",
})

const app = express()

app.get("/login", (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes))
})

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
