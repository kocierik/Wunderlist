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
import Title from "./Title"
import { getUserDocument, firestore } from "../../../db/firebase"
import { userContext } from "../../../provider/userContext"

// Generate Order Data
function createData(id: number, date: string, name: string, album: string) {
  return { id, date, name, album }
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS"),
  createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK"),
  createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA"),
  createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN"),
  createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ"),
]

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
      const userData = await getUserDocument(user)
      const id = userData?.id
      const trackRef = firestore.collection("users").doc(id)
      const trackList = await (await trackRef.get()).data()
      setTracks(trackList?.topTracks)
      console.log(trackList?.topTracks[0].id)
      console.log(trackList)
      // console.log(trackList?.topTracks[0].album.name)
    } catch (error) {
      console.log(error)
      // setTracks([])
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
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Release date</TableCell>
            <TableCell sx={{ color: "white" }}>Artist</TableCell>
            <TableCell sx={{ color: "white" }}>Track</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks?.map((track: trackInterface) => (
            <TableRow key={track.id}>
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
