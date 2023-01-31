import React from "react";
import { Card, CardContent, Typography, ThemeProvider } from "@mui/material";

const Education = ({ sidebarItems, sxStyles, fontTheme, width }) => {
  return (
    <Card sx={sxStyles.mainCard2} id="education" name="Education">
      <CardContent sx={sxStyles.educationComp}>
        <div style={sxStyles.divColored}>
          <Typography>
            “Polytechnic" - high school for new technologies
          </Typography>
          <Typography variant="body2">2007-2011,Belgrade</Typography>
        </div>
        <div style={sxStyles.divColored}>
          <Typography>Faculty of Mechanical Engineering</Typography>
          <Typography variant="body2">
            2011-2018, University of Belgrade
          </Typography>
        </div>
        <div style={sxStyles.divColored}>
          <Typography variant="subtitle1">
            Worked as CNC Programmer for 3+years in several companies
          </Typography>
        </div>
        <ThemeProvider theme={fontTheme}>
          <Typography
            color="myColors.primary"
            sx={{ fontSize: width < 403 && "0.95rem" }}
          >
            "Although I come from a different profession,my math skills taken
            from college help me a lot through learning web development.Also as
            Cnc programmer I learned how to solve pc problems on my own."
          </Typography>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
};

export default Education;
