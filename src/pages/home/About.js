import {
  Card,
  CardContent,
  Avatar,
  Typography,
  ThemeProvider,
} from "@mui/material";
import profile from "../../assets/photos&images/profile.jpg";

const About = ({ width, sxStyles, fontTheme }) => {
  return (
    <Card sx={sxStyles.mainCard1} name="About">
      <Avatar alt="Veljko Radivojevic" src={profile} sx={sxStyles.profilePic} />
      <CardContent>
        <ThemeProvider theme={fontTheme}>
          <Typography sx={{ fontSize: width < 360 && "1.1rem", opacity: 0.9 }}>
            Hello, I'm Veljko{" "}
          </Typography>
          <Typography sx={{ fontSize: width < 360 && "1.1rem", opacity: 0.8 }}>
            Born 1992 in Belegrade.
          </Typography>
          <Typography sx={{ fontSize: width < 360 && "1.1rem", opacity: 0.7 }}>
            Working with pc is my passion since I was boy.
          </Typography>
          <Typography sx={{ fontSize: width < 360 && "1.1rem", opacity: 0.6 }}>
            Now, I'm enjoying on my road to become great Web Developer.
          </Typography>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
};

export default About;
