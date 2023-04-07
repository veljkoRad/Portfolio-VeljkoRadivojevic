import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledPhotoCard = styled(Card)(() => ({
  padding: 0,
  backgroundColor: "rgba(0,146,255,0.5)",
  borderRadius: "6px",
  "&:hover": {
    transform: " translate(0,-10px)",
    border: "solid 2px #F6BE3B",
  },
}));

const Photos = ({ width, cutPic }) => {
  const photoProp = {
    margin: width < 900 ? "0 auto 0 auto" : "",
  };

  return (
    <>
      {cutPic.map((item) => (
        <Grid item xs={8} md={3} key={item.id} sx={photoProp}>
          <Link style={{ textDecoration: "none" }} to={`/api/${item.id}`}>
            <StyledPhotoCard>
              <CardMedia component="img" height="250px" image={item.image} />
              <CardContent>
                <Typography
                  align="center"
                  color="primary.main"
                  sx={{ fontSize: "25px" }}
                  gutterBottom
                >
                  {item.mountain}
                </Typography>
                <Typography
                  align="center"
                  color="info.main"
                  sx={{ fontSize: "15px" }}
                >
                  {item.location}
                </Typography>
              </CardContent>
            </StyledPhotoCard>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Photos;
