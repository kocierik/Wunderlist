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
import axios from "axios"
import { useContext } from "react"
import { useHistory } from "react-router"
import CardInfo from "./cardInfo/cardInfo"
import "./index.scss"
import { tokenContext } from "../../provider/tokenContext"
import { userContext } from "../../provider/userContext"
import { firestore } from "../../db/firebase"

const API_ENDPOINT = "http://localhost:8888/topTrack"

function info() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userToken, setUserToken] = useContext<any>(tokenContext)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useContext<any>(userContext)
  console.log(userToken)
  const handleTrack = async (tokenAuth: string) => {
    axios
      .get(API_ENDPOINT, {
        headers: {
          Authorizazion: `Bearer ${tokenAuth}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const history = useHistory()

        const userRef = firestore.doc(`users/${user.body.id}`)
        const data = response.data.body.items
        userRef.update({ topTracks: data })
        console.log(response.data)
        console.log(user)
        const path = `dashboard`
        history.push(path)
      })
      .catch((error) => {
        console.log(error)
      })
  }

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
                  {user !== "" ? (
                    <Button size="large" onClick={() => handleTrack(userToken)}>
                      View
                    </Button>
                  ) : (
                    <Button
                      size="medium"
                      onClick={() =>
                        window.scroll({ top: 0, left: 0, behavior: "smooth" })
                      }
                    >
                      Login to see more
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
