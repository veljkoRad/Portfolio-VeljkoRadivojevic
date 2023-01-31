import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Photos = ({ apiStyles, pic, width }) => {
  const photoProp = {
    margin: width < 900 ? "0 auto 0 auto" : "",
  };

  return (
    <>
      {pic.map((item) => (
        <Grid item xs={8} md={3} key={item.id} sx={photoProp}>
          <Link style={{ textDecoration: "none" }} to={`/api/${item.id}`}>
            <Card sx={apiStyles.photoItem}>
              <CardMedia component="img" height="100%" src={item.image} />
              <CardContent sx={apiStyles.photoContent}>
                <Typography align="center" gutterBottom>
                  <Typography
                    align="center"
                    component="span"
                    color="myColors.main"
                  >
                    Mountain:
                  </Typography>
                  {item.mountain}
                </Typography>
                <Typography align="center">
                  <Typography
                    align="center"
                    component="span"
                    color="myColors.main"
                  >
                    Location:
                  </Typography>
                  {item.location}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Photos;
