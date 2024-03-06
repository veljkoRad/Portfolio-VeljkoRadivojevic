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
          Passionate frontend developer with one year of experience in PPC marketing.
        </StyledTypography>
        <StyledTypography sx={{ opacity: 0.7 }}>
          Enthusiastic about coding, continuous learning, and problem-solving with a proactive mindset.
        </StyledTypography>
        <StyledTypography sx={{ opacity: 0.6 }}>
          Self-taught and always eager to expand my knowledge.
        </StyledTypography>

        <StyledButton
          href="/VeljkoRadivojevicCV.pdf"
          target="_blank"
          variant="outlined"
          color="error"
          size="small"
          sx={{
            borderWidth: '3px',
            borderRadius: '5px',
            opacity: 0.6, textTransform: 'uppercase',
            fontSize: 24, '@media (max-width: 500px)': {
              fontSize: '18px'
            }, '@media (max-width: 400px)': {
              fontSize: '16px'
            }, width: 'auto'
          }}
        >
          <StyledTypography>Portfolio</StyledTypography>
        </StyledButton>
      </CardContent>
    </Card>
  );
};

export default About;
