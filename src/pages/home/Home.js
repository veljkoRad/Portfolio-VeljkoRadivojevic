import { Container, Grid, useTheme, styled } from "@mui/material";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Sidebar from "./Sidebar";

const StyledContainer = styled(Container)(() => ({
  gap: "90px",
  justifyContent: "space-evenly",
  position: "static",
  paddingTop: "90px",
  paddingBottom: "90px",
}));

const Home = ({ width }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        paddingBottom: "50px",
      }}
    >
      <Grid container spacing={0}>
        {width > 600 && (
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
        )}
        <Grid item xs={12} sm={10}>
          <StyledContainer>
            <About width={width} />
            <Education width={width} />
            <Experience width={width} />
            <Contact width={width} />
          </StyledContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
