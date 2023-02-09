import React from "react";
import { Card, CardContent, Typography, ThemeProvider } from "@mui/material";

const Education = ({ sidebarItems, sxStyles, fontTheme, width }) => {
  return (
    <Card sx={sxStyles.mainCard2} id="education" name="Education">
      <CardContent sx={sxStyles.educationComp}>
        <ThemeProvider theme={fontTheme}>
          <div style={sxStyles.divColored}>
            <Typography sx={{ fontSize: width > 370 ? "1.3rem" : "0.95rem" }}>
              “Polytechnic" - high school for new technologies
            </Typography>
            <Typography sx={{ fontSize: width > 370 ? "1rem" : "0.75rem" }}>
              2007-2011,Belgrade
            </Typography>
          </div>
          <div style={sxStyles.divColored}>
            <Typography sx={{ fontSize: width > 370 ? "1.3rem" : "0.95rem" }}>
              Faculty of Mechanical Engineering
            </Typography>
            <Typography sx={{ fontSize: width > 370 ? "1rem" : "0.75rem" }}>
              2011-2018, University of Belgrade
            </Typography>
          </div>
          <div style={sxStyles.divColored}>
            <Typography sx={{ fontSize: width > 370 ? "1.3rem" : "0.95rem" }}>
              Worked as CNC Programmer for 3+years in several companies
            </Typography>
          </div>
        </ThemeProvider>
        <Typography
          color="myColors.secondary"
          sx={{ fontSize: width < 430 ? "1rem" : "1.4rem" }}
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
