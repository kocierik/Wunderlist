/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-use-before-define
import * as React from "react"
import Link from "@mui/material/Link"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import { firestore } from "../../../db/firebase"
import { userContext } from "../../../provider/userContext"

interface trackInterface {
  album: {
    // eslint-disable-next-line camelcase
    release_date: string
  }
  artists: [{ name: string }]
  // eslint-disable-next-line camelcase
  track_number: number
  name: string
  // eslint-disable-next-line camelcase

  id: React.Key | null | undefined
  tracks: {
    id: string
    name: string
  }
}

export default function Orders() {
  const [user, setUser] = React.useContext(userContext)
  const [tracks, setTracks] = React.useState([])

  const getUserData = async () => {
    try {
      const id = sessionStorage.getItem("userID")
      if (!id) return
      if (!user) {
        setUser(id)
      } else {
        sessionStorage.setItem("userID", user)
      }

      const trackRef = firestore.collection("users").doc(id)
      const trackList = await (await trackRef.get()).data()
      setTracks(trackList?.topTracks)
      console.log(trackList?.topTracks[0].id)
      console.log(trackList)
    } catch (error) {
      console.log(error)
      setTracks([])
    }
  }

  React.useEffect(() => {
    getUserData()
  }, [])

  function preventDefault(event: React.MouseEvent) {
    event.preventDefault()
  }
  return (
    <>
      {/* <Title>Recent Orders</Title> */}
      <Table size="medium">
        <TableHead>
          <TableRow sx={{ border: "solid green" }}>
            <TableCell sx={{ color: "white" }}>Release date</TableCell>
            <TableCell sx={{ color: "white" }}>Artist</TableCell>
            <TableCell sx={{ color: "white" }}>Track</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks?.map((track: trackInterface) => (
            <TableRow key={track.id} sx={{ border: "solid green" }}>
              <TableCell sx={{ color: "white" }}>
                {track.album.release_date}
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                {/* {track.artists.map((artist) => {
                  // eslint-disable-next-line no-unused-expressions
                  console.log(artist.name)
                  return artist.name
                })} */}
                {track.artists[0].name}
              </TableCell>
              <TableCell sx={{ color: "white" }}>{track.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  )
}
