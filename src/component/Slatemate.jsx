import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
// import useMediaQuery from "./hooks/useMediaQuery";

import img from "../images/img.webp";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#0cb",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Responsive = styled("Stack")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "coloumn",
    color: green,
    border:"3px solid black"
  },
}));

export default function Slatemate() {
  return (
    <div className="head">
      {/* <Container> */}
      <Container className="main" >
        <Item className="forMobile"   sx={{ float:"left" ,  width: 556, height: 456, marginTop: "40px" }}>
          <Avatar
            alt="Remy Sharp"
            src={img}
            sx={{  width: 456, height: 356, marginLeft: "40px" }}
          />
        </Item>
        <Item className="forMobile" sx={{ float:"left" , width: 556, height: 506 }}>
          <span class="top-text1">
            <p class="top-text2 fontFamily">
              Very very carefully <br />
              chosen tutors
            </p>
          </span>
          <Typography
            variant="h5"
            marginTop="20px"
            marginLeft="35px"
            color="#ffffff"
            className="fontFamily weight"
          >
            With proven academic record and exam <br /> success
          </Typography>
          <Typography
            variant="h5"
            marginTop="20px"
            marginLeft="35px"
            color="#ffffff"
            className="fontFamily align"
          >
            We truly believe successful teachers make <br /> successful
            students. That’s why we select
            <br /> tutors from top colleges who are a perfect <br />
            source of inspiration and expertise for your <br />
            child.
          </Typography>
        </Item>
      </Container>
      {/* </Container> */}
    </div>
  );
}
