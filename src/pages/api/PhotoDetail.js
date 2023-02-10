import { useState, useEffect } from "react";
import tremDrugi from "../../assets/photos&images/tremDrugi.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { apiStyles } from "../../assets/apiStyles";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Container, Typography } from "@mui/material";

const PhotoDetail = ({ pic, width }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  let adress = `http://localhost:5000/photos/${id}`;
  useEffect(() => {
    axios.get(adress).then((res) => setData(res.data));
  }, [adress]);

  return (
    <div
      style={{
        backgroundColor: `#0A192F`,
        height: "100%",
      }}
    >
      <Link to={-1}>
        <ArrowBackIosNewIcon
          fontSize="large"
          color="myColors2"
          sx={apiStyles.backArrow}
        />
      </Link>
      <Container
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: width >= 900 ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <img src={data.image} style={apiStyles.cardPhoto} alt="" />
        </div>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4" color="myColors.secondary">
            "{data.name}"
          </Typography>
          <Typography color="myColors.white">
            Mountain:{" "}
            <Typography
              component="span"
              variant="h6"
              color="myColors.secondary"
            >
              {data.mountain}
            </Typography>
          </Typography>
          <Typography color="myColors.white">
            Location:
            <Typography
              component="span"
              variant="h6"
              color="myColors.secondary"
            >
              {data.location}
            </Typography>
          </Typography>
          <Typography color="myColors.white">
            Highest Point:
            <Typography
              component="span"
              variant="h6"
              color="myColors.secondary"
            >
              {data.highestPoint}
            </Typography>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default PhotoDetail;
