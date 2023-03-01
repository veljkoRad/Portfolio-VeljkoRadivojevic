import { Avatar, Card, CardContent, Typography, styled } from "@mui/material";
import profile from "../../assets/photos&images/profile.jpg";

const StyledAvatar = styled(Avatar)(() => ({
  width: 170,
  height: 170,
  marginRight: "20%",
  marginLeft: "auto",
  border: "2px solid #F6BE3B",
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
          Working with pc is my passion since I was boy.
        </StyledTypography>
        <StyledTypography sx={{ opacity: 0.6 }}>
          Now, I'm enjoying on my road to become great Web Developer.
        </StyledTypography>
      </CardContent>
    </Card>
  );
};

export default About;
