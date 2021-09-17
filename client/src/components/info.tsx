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
// eslint-disable-next-line import/no-unresolved
import CardInfo from "./cardInfo"
import "../style/info.scss"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function info() {
  return (
    <div className="content_info">
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {/*  eslint-disable-next-line @typescript-eslint/ban-types */}
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
                  <Button size="large">View</Button>
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
