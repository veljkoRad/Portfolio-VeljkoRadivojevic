import { Fab, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const DefaultPhotos = ({ setHidePagination, setPic, setNum, num, api }) => {
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
      color="myColors3"
      variant="extended"
      size="small"
      sx={{
        color: "white",
      }}
    >
      <Typography>Show All Photos</Typography>
    </Fab>
  );
};

export default DefaultPhotos;
