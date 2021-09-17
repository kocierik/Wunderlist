import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Home"
import CssBaseline from "@mui/material/CssBaseline"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Grid } from "@mui/material"

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

const theme = createTheme()

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "#1F0954" }}>
        <Toolbar style={{ justifyContent: "right" }}>
          <DeleteIcon color="primary" style={{ color: "#4367F0" }} />
          <Typography variant="h6" color="inherit" noWrap />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 8,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
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
              listen together.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">sign up</Button>
              <Button variant="outlined">sign in</Button>
            </Stack>
          </Container>
          {/* AAAAAAAAAAAAAAAAAAAAAA */}
          <Container sx={{ py: 1 }}>
            {/* End hero unit */}
            <Grid spacing={0} flexDirection="column">
              <Box sx={{ padding: 0 }}>
                <div className="content_info">
                  <ul>
                    <li> Get all stats from your spotify account</li>
                    <li> Discover new music</li>
                    <li> Share with your friends</li>
                    <li> Enter in the leaderboard of the best listener</li>
                  </ul>
                </div>
              </Box>
              <Grid item xs={12} sm={12} md={12}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    style={{ filter: "blur(1px)", borderRadius: "15px" }}
                    component="img"
                    image={Image}
                    alt="spotify"
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>

          {/* AAAAAAAAAAAAAAAAAAAAAA */}
        </Box>
        <Container maxWidth="xl" sx={{ py: 10, bgcolor: "#111D4A" }} />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "#111D4A", p: 6 }} component="footer">
        <Typography variant="h6" align="center" color="white" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        />
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}
