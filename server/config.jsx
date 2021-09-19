// const fs = require("fs")
// const SpotifyWebApi = require("spotify-web-api-node")
// const token = "BQCFpE4uPOfbbdXslD5a4Sss1cAr1JZUGGIvVuWWWSxuBBojpfceEAaW_9ZaRHv4Y-Nv1iFyCWT-2p6jqaZTUbRsh7XrqHKlai6ajDTvBfPa6fRRuUTuXDfgMAKQLeDzMeL0trIqKKVPFI4qxYrNTVvaQt7bhrCQIWIJG6CSc4dfGzJ42kLd2h1tcqCxcyJ7xG_WJ54Nn7WM8o5aNt2SAXJA4d0WtjRRk0x3eap7lP_USvnDYq9CzvsnzPqA5G8eokDU4Qs_rnUSr4IXZqaVHq-i9w"
// const spotifyApi = new SpotifyWebApi()
// spotifyApi.setAccessToken(token)

// const getMyData = () =>{
//   (async () => {
//     const me = await spotifyApi.getMe()
//     console.log(me.body)
//     getCurrentPlaying(me.body.id)
//   })().catch(e =>{
//     console.log(e)
//   })
// }

// const getCurrentPlaying = async (username) => {
//   try {
//     const data = await spotifyApi.getMyCurrentPlayingTrack()
//     console.log("----------------------")
//     console.log(data.body.item)
//     let track = data.body.item;
//     console.log(`album: ${track.album.name} artist: ${track.artists[0].name} name: ${track.name} `)
//   }    
//   catch (error) {
//     console.log(error)
//   }
// }
// getMyData()