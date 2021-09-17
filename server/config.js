const fs = require("fs")
const SpotifyWebApi = require("spotify-web-api-node")
const token = "BQDwqrUNpSUZMeZ2CFZt_8of2pAwqHp6ou_HqzUCobpv8-_2HvUpO4jshYPqv0BeCNeAnEz0ND0W3zq1bf0JkhhrGT1aKsxy8JvkdDvzL7S3m1w2YpKtusM10RUDuUOi3LlSck9aF1vXlNGI2gqDlrkgAK_maafage4Q5AChR-OuuvCT8CsWgqsaJXwNDPuRaaUyXfCh6cuucUYp15oX-jGJrhEzqZXm9cM9YXu2HGw4xrAhTlF5J2BxRZhXab2NkCNRWE-GVIaV8x_srIcV89Eg1Q"

const spotifyApi = new SpotifyWebApi()
spotifyApi.setAccessToken(token)

const getMyData = () =>{
  (async () => {
    const me = await spotifyApi.getMe()
    console.log(me.body)
    getUserArtists(me.body.id)

  })().catch(e =>{
    console.log(e)
  })
}

 const getUserArtists = async (username) => {
  try {
    const data = await spotifyApi.getMyCurrentPlayingTrack()
    
    console.log("----------------------")
    console.log(data.body.item)
    let track = data.body.item;
      console.log(`album: ${track.album.name} artist: ${track.artists[0].name} name: ${track.name} `)

  }    
  catch (error) {
    console.log(error)
  }
}
getMyData()