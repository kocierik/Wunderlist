import React from "react"
import "./style/main.scss"
import AppBar from "@mui/material/AppBar"
import Home from "@mui/icons-material/Home"
import Typography from "@mui/material/Typography"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import { Card, CardActions, CardContent, Grid } from "@mui/material"
import Cardinfo from "./cardInfo"

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
            <Grid container spacing={4}>
              {Cardinfo.map((card) => (
                <Grid item key={card} xs={12} sm={12} md={12}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "row",
                      borderRadius: "0px",
                    }}
                  >
                    <CardContent
                      sx={{
                        flex: "1 0 auto",
                        bgcolor: "#181212",
                        color: "white",
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography sx={{ fontStyle: "italic" }}>
                        {card.text}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ flex: "0 1 20%", bgcolor: "#181212" }}>
                      <Button size="large">View</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
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
