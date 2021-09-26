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

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Orders() {
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Date</TableCell>
            <TableCell sx={{ color: "white" }}>Artist</TableCell>
            <TableCell sx={{ color: "white" }}>Album</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ color: "white" }}>{row.date}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.name}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.album}</TableCell>
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
