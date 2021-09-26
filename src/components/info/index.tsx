/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material"
import { useContext } from "react"
import { useHistory } from "react-router"
import CardInfo from "./cardInfo/cardInfo"
import "./index.scss"
import { tokenContext } from "../../provider/tokenContext"

function info() {
  const history = useHistory()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userToken, setUserToken] = useContext(tokenContext)

  return (
    <div className="content_info">
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {CardInfo.map((card) => (
            <Grid item key={card.id} xs={12} sm={12} md={12}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "0px",
                  boxShadow: "20px 5px 15px 5px #000000",
                }}
              >
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    bgcolor: "#110C0C",
                    color: "white",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="#1976d2"
                  >
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontStyle: "italic" }}>
                    {card.text}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    flex: "0 1 20%",
                    bgcolor: "#110C0C",
                    color: "#1976d2",
                    fontSize: "15px",
                    justifyContent: "center",
                  }}
                >
                  {userToken !== "" ? (
                    "View"
                  ) : (
                    <Button
                      size="medium"
                      onClick={() =>
                        window.scroll({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      See more
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
export default info
