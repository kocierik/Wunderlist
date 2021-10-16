/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define
import * as React from "react"
import Home from "@mui/icons-material/Home"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Link from "@mui/material/Link"
import { AppBar, IconButton } from "@mui/material"
import Orders from "./Orders"
import "./dashboard.scss"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="white"
      align="center"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  )
}

function DashboardContent() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
            bgcolor: "#150d0d",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              marginRight: "36px",
            }}
          />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Home
              onClick={() =>
                window.location.assign("https://wunderlistt.netlify.app/")
              }
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "transparent",
                color: "white",
              }}
            >
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 5 }} />
      </Container>
    </>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
