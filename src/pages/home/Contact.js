import emailjs from "@emailjs/browser";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Link,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";

const StyledGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "2.5rem",
}));

const linkIcons = {
  color: "error.main",
  fontSize: "2rem",
  "&:hover": {
    color: "info.main",
  },
};

const Contact = ({ width }) => {
  //Email form start
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5a32n4i",
        "template_j9v9fgt",
        form.current,
        "k7IvxzUAmv8LxH_JK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //Email form end

  return (
    <Card id="contact" name="Contact">
      <CardContent>
        <form ref={form} onSubmit={sendEmail}>
          <StyledGrid>
            <Typography
              variant="h6"
              sx={{ marginLeft: "auto", marginBottom: "-2.5rem" }}
            >
              Contact me:
            </Typography>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: width < 376 ? "column" : "row",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>
                radivojevicveljko@gmail.com
              </Typography>

              <div style={{ display: "flex", gap: "5px" }}>
                <Link href="https://github.com/veljkoRad" target="_blank">
                  <GitHubIcon sx={linkIcons} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/veljko-radivojevic-77a825267/"
                  target="_blank"
                >
                  <LinkedInIcon sx={linkIcons} />
                </Link>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: width < 376 ? "column" : "row",
                gap: "1.5rem",
              }}
            >
              <TextField
                type="text"
                fullWidth
                label="Your Name"
                name="to_name"
                color="secondary"
              />
              <TextField
                type="email"
                fullWidth
                label="Your Email"
                name="from_name"
                color="secondary"
              />
            </Grid>
            <TextField
              label="Message"
              name="message"
              multiline
              rows={width < 376 ? 2 : 4}
              color="secondary"
            />

            <Button variant="outlined" color="secondary">
              <Input
                fullWidth
                type="submit"
                disableUnderline
                sx={{
                  color: "error.main",
                  fontWeight: "bold",
                }}
              />
            </Button>
          </StyledGrid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;
