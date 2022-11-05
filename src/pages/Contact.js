import { Box, Button, Grid, TextField } from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ margin: "5%" }}>
      <Grid container direction="column" rowSpacing={2} alignItems="center">
        <Grid item sx={{ width: "75%" }}>
          <TextField
            required
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item sx={{ width: "75%" }}>
          <TextField
            required
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item sx={{ width: "75%" }}>
          <TextField
            required
            label="Subject"
            variant="outlined"
            type="text"
            name="subject"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item sx={{ width: "75%" }}>
          <TextField
            required
            multiline
            rows={5}
            label="Message"
            variant="outlined"
            type="text"
            name="message"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item sx={{ width: "75%" }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            sx={{ width: "100%" }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
