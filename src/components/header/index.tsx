import Home from "@mui/icons-material/Home"
import { AppBar, Toolbar, Typography } from "@mui/material"
import "./index.scss"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function header() {
  return (
    <div className="header">
      <AppBar position="fixed" sx={{ bgcolor: "transparent" }}>
        <Toolbar style={{ justifyContent: "right" }}>
          <Home style={{ cursor: "pointer" }} />
          <Typography variant="h6" noWrap />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default header
