import { Card, CardContent, Typography, ThemeProvider } from "@mui/material";

const Education = ({ sidebarItems, sxStyles, fontTheme, width }) => {
  const eduTextStyle1 = {
    fontSize: width > 370 ? "1.3rem" : "0.95rem",
  };
  const eduTextStyle2 = { fontSize: width > 370 ? "1rem" : "0.75rem" };

  return (
    <Card sx={sxStyles.mainCard2} id="education" name="Education">
      <CardContent sx={sxStyles.educationComp}>
        <ThemeProvider theme={fontTheme}>
          <div style={{ ...sxStyles.divColored, opacity: 0.6 }}>
            <Typography sx={eduTextStyle1} color="#0A192F">
              “Polytechnic" - high school for new technologies
            </Typography>
            <Typography sx={eduTextStyle2} color="#0A192F">
              2007-2011,Belgrade
            </Typography>
          </div>
          <div style={{ ...sxStyles.divColored, opacity: 0.55 }}>
            <Typography sx={eduTextStyle1} color="#0A192F">
              Faculty of Mechanical Engineering
            </Typography>
            <Typography sx={eduTextStyle2} color="#0A192F">
              2011-2018, University of Belgrade
            </Typography>
          </div>
          <div style={{ ...sxStyles.divColored, opacity: 0.5 }}>
            <Typography sx={eduTextStyle1} color="#0A192F">
              Worked as CNC Programmer for 3+years in several companies
            </Typography>
          </div>
        </ThemeProvider>
        <Typography
          color="myColors.secondary"
          sx={{ fontSize: width < 430 ? "1rem" : "1.4rem", opacity: 0.75 }}
        >
          My math skills, taken from college help me a lot through learning web
          development.<br></br>As Cnc programmer I learned about programing
          basics.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Education;
