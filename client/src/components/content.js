import { Box, Button, Container, Stack, Typography } from "@mui/material"
import React from "react"
import "../style/content.scss"

function content() {
  return (
    <div className="content">
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
    </div>
  )
}

export default content
