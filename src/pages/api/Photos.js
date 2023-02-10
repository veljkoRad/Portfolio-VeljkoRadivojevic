import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Link } from "react-router-dom";
const Photos = ({ apiStyles, pic, width, fontTheme }) => {
  const photoProp = {
    margin: width < 900 ? "0 auto 0 auto" : "",
  };

  return (
    <>
      {pic.map((item) => (
        <Grid item xs={8} md={3} key={item.id} sx={photoProp}>
          <Link style={{ textDecoration: "none" }} to={`/api/${item.id}`}>
            <Card sx={apiStyles.photoItem}>
              <CardMedia component="img" height="250px" src={item.image} />
              <CardContent sx={apiStyles.photoContent}>
                <ThemeProvider theme={fontTheme}>
                  <Typography
                    align="center"
                    color="#0A192F"
                    sx={{ fontSize: "25px" }}
                    gutterBottom
                  >
                    {item.mountain}
                  </Typography>
                  <Typography
                    align="center"
                    color="#F1F1E6"
                    sx={{ fontSize: "15px" }}
                  >
                    {item.location}
                  </Typography>
                </ThemeProvider>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Photos;
