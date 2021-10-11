/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-use-before-define
import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import { Box } from "@mui/material"
import { firestore } from "../../../db/firebase"
import Title from "./Title"

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
  const [tracks, setTracks] = React.useState([])

  const getUserData = async () => {
    try {
      const id = localStorage.getItem("userID")
      if (!id) return
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

  return (
    <Box paddingTop={5}>
      <Title>Recent Orders</Title>
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
    </Box>
  )
}
