import {
  Card,
  CardContent,
  ThemeProvider,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import htmlIcon from "../../assets/photos&images/experienceImages/html.svg";
import cssIcon from "../../assets/photos&images/experienceImages/css.svg";
import jsIcon from "../../assets/photos&images/experienceImages/javascript.svg";
import reactIcon from "../../assets/photos&images/experienceImages/react.svg";
import gitIcon from "../../assets/photos&images/experienceImages/git.svg";
import bootstrapIcon from "../../assets/photos&images/experienceImages/bootstrap.svg";
import materialIcon from "../../assets/photos&images/experienceImages/materialUi.svg";
import youtubeIcon from "../../assets/photos&images/experienceImages/youtube.svg";
import courseraIcon from "../../assets/photos&images/experienceImages/coursera.svg";
import codeWarsIcon from "../../assets/photos&images/experienceImages/codewars.svg";
import w3schoolsIcon from "../../assets/photos&images/experienceImages/w3schools.svg";
import nodeJsIcon from "../../assets/photos&images/experienceImages/node.svg";

const Experience = ({ sidebarItems, sxStyles, width, theme }) => {
  const iconsArr = [
    { name: "Html", img: htmlIcon },
    { name: "Css", img: cssIcon },
    { name: "Javascript", img: jsIcon },
    { name: "Node Js", img: nodeJsIcon },
    { name: "Git", img: gitIcon },
    { name: "Material UI", img: materialIcon },
    { name: "Bootstrap", img: bootstrapIcon },
    { name: "React Js", img: reactIcon },
  ];
  const iconsArr2 = [
    { name: "Youtube", img: youtubeIcon },
    { name: "Coursera", img: courseraIcon },
    { name: "CodeWars", img: codeWarsIcon },
    { name: "W3Schools", img: w3schoolsIcon },
  ];
  return (
    <Card sx={sxStyles.mainCard1} id="experience" name="Experience">
      <CardContent sx={sxStyles.experienceComp}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "20px" }}>
            <ThemeProvider theme={theme}>
              <Typography color="#F6BE3B" sx={{ opacity: 0.9 }}>
                Current skills
              </Typography>
            </ThemeProvider>
          </Grid>
          {iconsArr.map((arr) => (
            <Grid item xs={4} sm={3} sx={{ margin: "10px 0 10px 0" }}>
              <div style={sxStyles.iconsDiv}>
                <Avatar sx={sxStyles.avatarProp}>
                  <img src={arr.img} alt="" width="60%" />
                </Avatar>

                <Typography
                  sx={{
                    ...sxStyles.languageInfo,
                    fontSize: width > 410 ? "1.1rem" : "0.8rem",
                  }}
                >
                  {arr.name}
                </Typography>
              </div>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "20px" }}>
            <ThemeProvider theme={theme}>
              <Typography color="#F6BE3B" sx={{ opacity: 0.9 }}>
                Sources of learning
              </Typography>
            </ThemeProvider>
          </Grid>
          {iconsArr2.map((item) => (
            <Grid item xs={4} sm={3} sx={{ margin: "10px 0 10px 0" }}>
              <div style={sxStyles.iconsDiv}>
                <Avatar sx={sxStyles.avatarProp}>
                  <img src={item.img} alt="" width="70%" />
                </Avatar>
                <Typography
                  sx={{
                    ...sxStyles.languageInfo,
                    fontSize: width > 480 ? "1.1rem" : "0.7rem",
                  }}
                >
                  {item.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Experience;
