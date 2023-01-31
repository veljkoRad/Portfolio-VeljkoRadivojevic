import { Card, CardContent, Typography, Avatar } from "@mui/material";
import htmlIcon from "../../assets/photos&images/experienceImages/html.svg";
import cssIcon from "../../assets/photos&images/experienceImages/css.svg";
import jsIcon from "../../assets/photos&images/experienceImages/javascript.svg";
import reactIcon from "../../assets/photos&images/experienceImages/react.svg";
import reactRouterIcon from "../../assets/photos&images/experienceImages/reactRouter.svg";
import bootstrapIcon from "../../assets/photos&images/experienceImages/bootstrap.svg";
import materialIcon from "../../assets/photos&images/experienceImages/materialUi.svg";
import youtubeIcon from "../../assets/photos&images/experienceImages/youtube.svg";
import courseraIcon from "../../assets/photos&images/experienceImages/coursera.svg";
import codeWarsIcon from "../../assets/photos&images/experienceImages/codewars.svg";
import w3schoolsIcon from "../../assets/photos&images/experienceImages/w3schools.svg";

const Experience = ({ sidebarItems, sxStyles, width }) => {
  return (
    <Card sx={sxStyles.mainCard1} id="experience" name="Experience">
      <CardContent sx={sxStyles.experienceComp}>
        <div style={sxStyles.wholeRow}>
          <Typography color="#fff" gutterBottom>
            Languages
          </Typography>
          <div style={sxStyles.iconsRow}>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={htmlIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>Html</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={cssIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>Css</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={jsIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>Javascript</Typography>
            </div>
          </div>
        </div>

        <div style={sxStyles.wholeRow}>
          <Typography color="#fff" gutterBottom>
            Libraries / Frameworks
          </Typography>
          <div style={sxStyles.iconsRow}>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={reactIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>React</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={reactRouterIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>ReactRouter</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={bootstrapIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>Bootstrap</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={materialIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>Material UI</Typography>
            </div>
          </div>
        </div>
        <div style={sxStyles.wholeRow}>
          <Typography color="#fff" gutterBottom>
            Sources of learning
          </Typography>
          <div style={sxStyles.iconsRow}>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={youtubeIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>Youtube</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={courseraIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>Coursera</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={codeWarsIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>CodeWars</Typography>
            </div>
            <div style={sxStyles.iconsDiv}>
              <Avatar>
                <img src={w3schoolsIcon} alt="" width="25px" />
              </Avatar>
              <Typography sx={sxStyles.languageInfo}>W3Schools</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
