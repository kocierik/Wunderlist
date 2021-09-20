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
import { useContext, useState } from "react"
import CardInfo from "./cardInfo"
import { DataResponse } from "../types"
import "../style/info.scss"
import { tokenContext } from "../tokenContext"

const API_ENDPOINT = "http://localhost:8888/topTrack"
function info() {
  const [dataUserSpoti, setDataUserSpoti] = useState<DataResponse>({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userToken, setUserToken] = useContext<any>(tokenContext)
  const handleTrack = async (tokenAuth: string) => {
    axios
      .get(API_ENDPOINT, {
        headers: {
          Authorizazion: `Bearer ${tokenAuth}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data)
        setDataUserSpoti(response.data as DataResponse)
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
                    bgcolor: "#050F1E",
                    justifyContent: "center",
                  }}
                >
                  <Button size="large" onClick={() => handleTrack(userToken)}>
                    View
                  </Button>
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
