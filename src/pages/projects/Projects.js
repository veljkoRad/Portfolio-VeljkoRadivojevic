import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Link,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { projectsList } from "../../data/dataItems";

const Projects = ({ width }) => {
  //Styling start
  const theme = useTheme();

  const StyledBox = styled(Box)(() => ({
    padding: "100px 0 40px 0",
    backgroundColor: theme.palette.primary.main,
    height: "100%",
  }));

  const StyledPhotoCard = styled(Card)(() => ({
    padding: 0,
    backgroundColor: "rgba(0,146,255,0.5)",
    borderRadius: "6px",
    "&:hover": {
      transform: " translate(0,-10px)",
    },
  }));
  const gitIcon = {
    color: "error.main",
    fontSize: "2rem",
  };

  //Styling end

  return (
    <StyledBox>
      <Grid container spacing={4} direction="row" justifyContent="center">
        {projectsList.map((item) => (
          <Grid item key={item.id} xs={7} md={5} lg={3.5}>
            <StyledPhotoCard>
              <CardMedia
                component="img"
                sx={{ height: "230px" }}
                src={item.image}
              ></CardMedia>
              <CardContent sx={{ padding: "15px" }}>
                <Typography color="primary" sx={{ fontSize: "18px" }}>
                  {item.name}
                </Typography>
                <Typography color="info.main" sx={{ fontSize: "15px" }}>
                  {item.info}
                </Typography>
                <Link
                  href={item.location}
                  target="_blank"
                  sx={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <OpenInNewIcon sx={gitIcon} />
                </Link>
              </CardContent>
            </StyledPhotoCard>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
};

export default Projects;
