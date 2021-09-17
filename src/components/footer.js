import { Box, Link, Typography } from "@mui/material"
import React from "react"

function footer() {
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
  return (
    <div>
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
    </div>
  )
}

export default footer
