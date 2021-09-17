import Home from "@mui/icons-material/Home"
import { AppBar, Toolbar, Typography } from "@mui/material"
import "../style/header.scss"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function header() {
  return (
    <div className="header">
      <AppBar position="relative" sx={{ bgcolor: "transparent" }}>
        <Toolbar style={{ justifyContent: "right" }}>
          <Home style={{ cursor: "pointer" }} />
          <Typography variant="h6" noWrap />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default header
