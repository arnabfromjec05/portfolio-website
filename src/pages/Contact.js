import {
  Alert,
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [backDropOpen, setBackDropOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState("success");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBackDropOpen(true);
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
          e.target.reset();
          setSnackbarType("success");
        },
        (error) => {
          console.log(error.text);
          setSnackbarType("error");
        }
      )
      .finally(() => {
        setSnackbarOpen(true);
        setBackDropOpen(false);
      });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ margin: "5%" }}>
        <Avatar
          alt="Contact me"
          src="memojipic.png"
          sx={{
            margin: "50px auto",
            width: 140,
            height: 140,
            backgroundColor: "lightblue",
          }}
        />
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
              Send <SendIcon fontSize="small" sx={{ marginLeft: "1%" }} />
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* backdrop loading effect */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* shows message sent status */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarType}
          sx={{ width: "100%" }}
        >
          {snackbarType === "success"
            ? "Message successfully sent!"
            : "Error occured while sending message!"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
