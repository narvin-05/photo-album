import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PhotoAlbum from "./component/PhotoAlbum";
import Slatemate from "./component/Slatemate";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import app from "./firebase";

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
import { useState } from "react";
import "./component/Slatemate.css"
import "./component/PhotoAlbum.css"

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

  // const [phoneNumber, setPhoneNumber] = useState("");

  // const auth = getAuth(app);

  // const sendOtp = (e) => {
  //   console.log(phoneNumber);
  //   window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  //     // 'size': 'invisible',
  //     'callback': (response) => {
  //       console.log("Hii");
  //       signInWithPhoneNumber(auth,phoneNumber,window.recaptchaVerifier);
  //     },
  //     'expired-callback': () => {
        
  //     }
  //   }, auth);
  //   signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
  //     .then((confirmationResult) => {
  //       // console.log(confirmationResult);
  //       console.log("hello");
  //       window.confirmationResult = confirmationResult;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const temmp = (e) => {
  //   e.preventDefault();
  //   console.log("Hello");
  // };

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
              <Typography
                mb={2}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Login
              </Typography>
              <TextField
                type="number"
                fullWidth
                label="Enter your phone number"
                id="fullWidth"
                // onChange={(e) => {
                  // setPhoneNumber(e.target.value);
                // }}
              />
              {/* <div id="recaptcha-container">

              </div> */}
              <Box sx={{ mt: 3 }}>
                <Button
                  // onClick={sendOtp}
                  // onSubmit={temmp}
                  variant="contained"
                  color="primary"
                >
                  Send OTP
                </Button>
              </Box>
              {/* <Form onSubmit={sendOtp}>
                <Button onSubmit={sendOtp}    variant="contained" color="primary">Click me</Button>
              </Form> */}
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>

      {
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
                      Register
                    </Button>
                  </Grid>
                  <Grid item style={{ marginBottom: "40px" }}>
                    <Button align="center" variant="outlined" color="primary">
                      About Us
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <PhotoAlbum />
          <br/> <br/> <br/>
          <Slatemate/>
        </main>
      }
    </>
  );
};

export default App;
