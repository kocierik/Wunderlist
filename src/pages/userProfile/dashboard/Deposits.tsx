import Typography from "@mui/material/Typography"
// eslint-disable-next-line import/extensions
import Title from "./Title"

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
