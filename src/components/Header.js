import { Avatar, Grid, Typography } from "@mui/material";
import Typed from "react-typed";

const introText = [
  "A Software Engineer by passion and profession.",
  "Love to build things.",
];

const Header = () => {
  return (
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
  );
};

export default Header;
