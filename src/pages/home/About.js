import {
  Card,
  CardContent,
  Avatar,
  Typography,
  ThemeProvider,
} from "@mui/material";
import profile from "../../assets/photos&images/profile.jpg";

const About = ({ sidebarItems, sxStyles, fontTheme }) => {
  return (
    <Card sx={sxStyles.mainCard1} name="About">
      <Avatar alt="Veljko Radivojevic" src={profile} sx={sxStyles.profilePic} />
      <CardContent>
        <ThemeProvider theme={fontTheme}>
          <Typography variant="h5" color="myColors.gray">
            Hello, I'm Veljko{" "}
          </Typography>
          <Typography>Born 1992 in Belegrade.</Typography>
          <Typography>
            Working with pc is my passion since I was boy.
          </Typography>
          <Typography>
            Now, I'm enjoying on my road to become great Web Developer.
          </Typography>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
};

export default About;
