import Header from "../components/Header";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Button, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <Grid container rowSpacing={4} sx={{ my: "50px" }}>
        <AboutCard />
        <ContactCard />
      </Grid>
    </>
  );
};

const AboutCard = () => {
  return (
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
  );
};

const ContactCard = () => {
  return (
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
  );
};

export default Home;
