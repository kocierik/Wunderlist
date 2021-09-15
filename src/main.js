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
import { Grid } from "@mui/material"
// import Image2 from "./img/image2.jpg"

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
            pt: 8,
            pb: 50,
          }}
          p={0}
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
              <Button variant="contained" bgcolor="white">
                sign up
              </Button>
              <Button variant="outlined">sign in</Button>
            </Stack>
          </Container>
        </Box>

        <div className="content_main">
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4} flexDirection="column">
              <Grid item xs={12} sm={12} md={12}>
                {/* <img
                  src={Image2}
                  alt="ok"
                  style={{ backgroundSize: "contain" }}
                /> */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Grid>
            </Grid>
          </Container>
        </div>
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
