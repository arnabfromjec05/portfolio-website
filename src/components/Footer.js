import { Grid, Paper, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{
        //todo: stick it to bottom
        py: "1%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Toolbar>
        <Grid container sx={{ fontSize: "12px" }} rowSpacing={1}>
          <Grid item sm={6} xs={12}>
            <Typography>
              Copyright © 2022 Arnab Jana - All Rights Reserved
            </Typography>
          </Grid>
          <Grid item container sm={6} xs={12} rowSpacing={2} direction="column">
            <Grid item>
              <Typography>Follow me on:</Typography>
            </Grid>
            <Grid item container columnSpacing={2}>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/arnab-jana/"
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="linkedin.png" alt="linkedin" className="logo" />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.instagram.com/arnabfromjec05/"
                  aria-label="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="instagram.jpeg" alt="instagram" className="logo" />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://twitter.com/arnabjana97/"
                  aria-label="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="twitter.png" alt="twitter" className="logo" />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Paper>
  );
};

export default Footer;
