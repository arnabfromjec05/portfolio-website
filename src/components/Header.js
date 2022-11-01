import { Avatar, Button, Grid, Typography } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonIcon from "@mui/icons-material/Person";
import Typed from "react-typed";

const introText = [
  "A Software Engineer by passion and profession.",
  "Love to build things.",
];

const Header = () => {
  return (
    <>
      <Grid container rowSpacing={4} sx={{ my: "50px" }}>
        <Grid item container justifyContent="center" xs={12} sm={6}>
          <Avatar
            alt="Arnab Jana"
            src="mypic.png"
            sx={{ width: "320px", height: "320px" }}
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          flexDirection="column"
          justifyContent="center"
          sx={{ textAlign: "center" }}
        >
          <Typography variant="h6">Hi! 👋 this is Arnab 😎</Typography>
          <Typography variant="h6">Welcome to my Profile! 🤝</Typography>
          <Typography variant="h6">
            <Typed strings={introText} typeSpeed={40} backSpeed={60} loop />
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} sx={{ my: "50px" }}>
        <Grid item sx={{ textAlign: "center" }} xs={12} sm={6}>
          <Avatar
            sx={{
              margin: "20px auto",
              width: 50,
              height: 50,
              backgroundColor: "green",
            }}
          >
            <PersonIcon />
          </Avatar>
          <Typography sx={{ marginBottom: "20px" }}>
            <Typography variant="div" display="block">
              If you want to know more about me.
            </Typography>
            <Typography variant="div" display="block">
              You can check out here.
            </Typography>
          </Typography>
          <Button href="/about" size="large" variant="outlined">
            About me
          </Button>
        </Grid>
        <Grid item sx={{ textAlign: "center" }} xs={12} sm={6}>
          <Avatar
            sx={{
              margin: "20px auto",
              width: 50,
              height: 50,
              backgroundColor: "blue",
            }}
          >
            <ContactPageIcon />
          </Avatar>
          <Typography sx={{ marginBottom: "20px" }}>
            <Typography variant="div" display="block">
              Don't hesitate to hit me up.
            </Typography>
            <Typography variant="div" display="block">
              I am available on LinkedIn, Instagram, Twitter.
            </Typography>
          </Typography>
          <Button href="/contact" size="large" variant="outlined">
            Contact me
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
