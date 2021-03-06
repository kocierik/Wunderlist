/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-use-before-define
import * as React from "react"
import Typography from "@mui/material/Typography"

interface TitleProps {
  children: React.ReactNode
}

export default function Title(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="whitesmoke" gutterBottom>
      {props.children}
    </Typography>
  )
}
