import { React, useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Container,
} from "@mui/material";

const cards = [
  {
    imageUrl:
      "https://images.pexels.com/photos/7086906/pexels-photo-7086906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Manali",
    desc: "Manali is a town in the Indian state of Himachal Pradesh.[2] It is situated in the northern end of the Kullu Valley, formed by the Beas River.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/10909933/pexels-photo-10909933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Kashmir",
    desc: "Jammu and Kashmir is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/4429324/pexels-photo-4429324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Goa",
    desc: "Goa has always been a party destination for us all to go reverbing and have a bash. It is a place where we can forget all the worries in the world.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/11750470/pexels-photo-11750470.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jaipur",
    desc: "Jaipur , capital of Rajasthan state. It is situated in the east-central part of the state, roughly equidistant from Alwar (northeast) and Ajmer (southwest).",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/4429324/pexels-photo-4429324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Gurgaon",
    desc: "Goa has always been a party destination for us all to go reverbing and have a bash. It is a place where we can forget all the worries in the world.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/11750470/pexels-photo-11750470.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jodhpur",
    desc: "Jaipur, city, capital of Rajasthan state, northwestern India. It is situated in the east-central part of the state, roughly equidistant from Alwar (northeast) and Ajmer (southwest).",
  },
]

const PhotoAlbum = () => {
  const [show, setShow] = useState(4);

  const handleOpen = () => {
    setShow(6);
  };

  const handleClose = () => {
    setShow(4);
  };

  const [inputText, setInput] = useState("");

  return (
    <>
      <Container maxWidth="md" style={{ padding: "10px 0" }}>
        <div className="Search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            color="success"
            onChange={(e) => setInput(e.target.value.toLowerCase())}
            label="Search.."
            type="search"
            style={{ marginBottom: "20px", alignItems: "center"  }}
          />
        </div>
        <br />
        <Button
          style={{ marginBottom: "30px" }}
          variant="outlined"
          color="primary"
          onClick={handleOpen}
        >
          Show More
        </Button>
        <Button
          style={{ marginBottom: "30px", marginLeft: "10px" }}
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          Show Less
        </Button>

        <Grid container spacing={5}>
          {cards.slice(0, show).filter(card=>card.name.toLowerCase().includes(inputText)).map((card) => (
            <Grid item outlined xs={12} small={6} md={4}>
              <Card
                className="styleCard"
                style={{ height: "100%", flexDirection: "coloumn" }}
              >
                <CardMedia
                  image={card.imageUrl}
                  style={{ paddingTop: "56%" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {card.name}
                  </Typography>
                  <Typography variant="body1">{card.desc}</Typography>
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
    </>
  );
};

export default PhotoAlbum;
