import React from "react";
import {
  Button,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Toolbar,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const cards = [1, 2, 3, 4, 5, 6, 7, 8 ,9,10,11,12,13,14,15,16,17,18];

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon style={{ marginRight: "10px" }} />
          <Typography variant="h6">Photos</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "30px" }}>
            <Typography align="center" variant="h2" margin={2}>
              Photo Album
            </Typography>
            <div>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item style={{marginBottom:'40px'}}>
                  <Button align="center" variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item style={{marginBottom:'40px'}}>
                  <Button align="center" variant="outlined" color="primary">
                    Add Photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container maxWidth="md" style={{ padding: "30px 0" }}>
          <Grid container spacing={5}>
            {cards.map(() => (
              <Grid item outlined xs={12} small={6} md={4}>
                <Card
                  style={{
                    height: "100%",
                    flexDirection: "coloumn",
                  }}
                >
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    style={{ paddingTop: "56%" }}
                  />
                  {/* style={{ flexGrow: 1 }} */}
                  <CardContent >
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography variant="body1">
                      This is a card where your image will come
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            ;
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
