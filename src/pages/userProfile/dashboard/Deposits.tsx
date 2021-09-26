/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-use-before-define
import * as React from "react"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
// eslint-disable-next-line import/extensions
import Title from "./Title"

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Deposits() {
  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="white" sx={{ flex: 1 }}>
        Last update: 15 March, 2019
      </Typography>
      <div />
    </>
  )
}
