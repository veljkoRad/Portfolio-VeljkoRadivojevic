import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  Container,
} from "@mui/material";

const Home = ({ sidebarItems, sxStyles, fontTheme, width }) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000046, #1cb5e0)",
        // paddingBottom: "50px",
      }}
    >
      <Grid container spacing={0}>
        {width > 600 && (
          <Grid item xs={2}>
            <Sidebar sidebarItems={sidebarItems} sxStyles={sxStyles} />
          </Grid>
        )}
        <Grid item xs={12} sm={10}>
          <Container className="aboutMain" sx={sxStyles.aboutMain}>
            <About
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              fontTheme={fontTheme}
            />
            <Education
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              fontTheme={fontTheme}
              width={width}
            />
            <Experience
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              width={width}
            />
            <Contact
              sidebarItems={sidebarItems}
              sxStyles={sxStyles}
              fontTheme={fontTheme}
              width={width}
            />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
