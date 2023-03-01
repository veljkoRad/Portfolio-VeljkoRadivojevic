import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Container, Typography, useTheme, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StyledIcon = styled(ArrowBackIosNewIcon)(({ theme }) => ({
  top: "20px",
  left: "10px",
  position: "relative",
  color: theme.palette.error.main,
}));

const cardPhoto = {
  borderRadius: "6px",
  width: "90%",
  maxHeight: "500px",
};

const PhotoDetail = ({ width }) => {
  const theme = useTheme();
  const { id } = useParams();

  const [data, setData] = useState([]);
  let adress = `http://localhost:5000/photos/${id}`;
  useEffect(() => {
    axios.get(adress).then((res) => setData(res.data));
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        paddingTop: "60px",
      }}
    >
      <Link to={-1}>
        <StyledIcon fontSize="large" />
      </Link>
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          flexDirection: width >= 900 ? "row" : "column",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <img src={data.image} style={cardPhoto} alt="" />
        </div>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">"{data.name}"</Typography>
          <Typography color="info.main">
            Mountain:{" "}
            <Typography component="span" variant="h6">
              {data.mountain}
            </Typography>
          </Typography>
          <Typography color="info.main">
            Location:
            <Typography component="span" variant="h6">
              {data.location}
            </Typography>
          </Typography>
          <Typography color="info.main">
            Highest Point:
            <Typography component="span" variant="h6">
              {data.highestPoint}
            </Typography>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default PhotoDetail;
