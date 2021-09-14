import React from "react"
import "./App.scss"
import AppBar from "@mui/material/AppBar"
import Home from "@mui/icons-material/Home"
import Typography from "@mui/material/Typography"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://kocierik.netlify.app/">
        kocierik
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  )
}

function App2() {
  return (
    <div className="container">
      <div className="header">
        <AppBar position="relative" sx={{ bgcolor: "transparent" }}>
          <Toolbar style={{ justifyContent: "right" }}>
            <Home style={{ cursor: "pointer" }} />
            <Typography variant="h6" noWrap />
          </Toolbar>
        </AppBar>
      </div>
      <div className="content">
        {/* <div className="content_title">
          <div className="makeTitle">
            <div className="title">Wonderlist</div>
            <div className="underTitle">listen together.</div>
          </div>
        </div> */}
        <Box
          sx={{
            pt: 0,
            pb: 0,
          }}
        >
          <Container maxWidth="25%">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="white"
              fontFamily="sans-serif"
              gutterBottom
            >
              Wunderlist
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="white"
              paragraph
              fontStyle="italic"
              fontFamily="sans serif"
            >
              <div className="typewriter"> listen together.</div>
            </Typography>
            <Stack
              sx={{ pt: 3 }}
              direction="row"
              spacing={3}
              justifyContent="center"
            >
              <Button variant="contained">sign up</Button>
              <Button variant="outlined">sign in</Button>
            </Stack>
          </Container>
        </Box>

        <div className="content_main">_</div>
      </div>
      {/* Footer */}
      <div className="footer">
        <Box sx={{ p: 5 }} component="footer">
          <Typography variant="h6" align="center" color="white" gutterBottom />
          <Typography
            variant="subtitle1"
            align="center"
            color="white"
            component="p"
          />
          <Copyright />
        </Box>
      </div>
      {/* End footer */}
    </div>
  )
}

export default App2
