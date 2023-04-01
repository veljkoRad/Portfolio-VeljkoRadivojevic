import { Fab, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const DefaultPhotos = ({ setHidePagination, num, setNum, api, setCutPic }) => {
  const datas = "http://localhost:5000/photos";
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios.get(datas).then((res) => setFilter(res.data));
  }, []);
  return (
    <Fab
      onClick={() => {
        setNum(1);
        axios.get(api).then((res) => {
          let first = num * 8 - 8;
          let second = num * 8;
          setCutPic(res.data.photos.slice(first, second));
        });
        setHidePagination(true);
      }}
      sx={{
        border: "solid 2px #F6BE3B",
        boxShadow: "none",
      }}
      color="primary"
      variant="extended"
      size="small"
    >
      <Typography color="info.main" sx={{ fontSize: "25px" }}>
        All Photos
      </Typography>
    </Fab>
  );
};

export default DefaultPhotos;
