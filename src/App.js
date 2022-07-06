import React from "react";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PhotoAlbum from "./component/PhotoAlbum";
import {
  Box,
  Button,
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Container,
  Toolbar,
  Modal,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <FlightTakeoffIcon sx={{ mr: 2 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TWS
          </Typography>
          <Button onClick={handleOpen} color="inherit">
            Login
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
                Login
              </Typography>
              <TextField  type="number"  fullWidth label="Enter your phone number" id="fullWidth" />
              <Box sx={{mt:3}}><Button variant="contained">Login</Button></Box>
            </Box> 
          </Modal>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "30px" }}>
            <Typography align="center" variant="h2" margin={2}>
              Travel With Us
            </Typography>
            <div>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item style={{ marginBottom: "40px" }}>
                  <Button align="center" variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item style={{ marginBottom: "40px" }}>
                  <Button align="center" variant="outlined" color="primary">
                    Add Photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <PhotoAlbum />
      </main>
    </>
  );
};

export default App;
