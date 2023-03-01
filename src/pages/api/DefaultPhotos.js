import { Fab, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const DefaultPhotos = ({ setHidePagination, setPic, setNum, api }) => {
  const datas = "http://localhost:5000/photos";
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios.get(datas).then((res) => setFilter(res.data));
  }, []);
  return (
    <Fab
      onClick={() => {
        setNum(1);
        axios.get(api).then((res) => setPic(res.data));
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
