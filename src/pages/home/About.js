import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import profile from "../../assets/photos&images/profile.jpg";

const StyledAvatar = styled(Avatar)(() => ({
  width: 170,
  height: 170,
  marginRight: "20%",
  marginLeft: "auto",
  border: "2px solid #F6BE3B",
}));
const StyledButton = styled(Button)(() => ({
  width: "40%",
  margin: "0 auto 0 auto",
}));

const About = ({ width }) => {
  const StyledTypography = styled(Typography)(() => ({
    fontSize: width < 360 && "1.1rem",
  }));

  return (
    <Card name="About">
      <StyledAvatar alt="Veljko Radivojevic" src={profile} />
      <CardContent>
        <StyledTypography sx={{ opacity: 0.9 }}>
          Hello, I'm Veljko{" "}
        </StyledTypography>
        <StyledTypography sx={{ opacity: 0.8 }}>
          Born 1992 in Belegrade.
        </StyledTypography>
        <StyledTypography sx={{ opacity: 0.7 }}>
          I'm a self-taught developer hungry for knowledge and eager to study at
          a rapid pace.
        </StyledTypography>
        <StyledButton
          href="/VeljkoRadivojevicCV.pdf"
          target="_blank"
          variant="outlined"
          color="error"
          size="small"
          width="30%"
        >
          <StyledTypography sx={{ opacity: 0.6 }}>My Resume</StyledTypography>
        </StyledButton>
      </CardContent>
    </Card>
  );
};

export default About;
