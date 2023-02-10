import { useState, useEffect } from "react";
import axios from "axios";
import { Fab, Typography } from "@mui/material";

const Filters = ({ setPic, setHidePagination, width }) => {
  //Filtering all photos start
  const data = "http://localhost:5000/photos";
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios.get(data).then((res) => setFilter(res.data));
  }, [data]);
  //Filtering all photos end

  const allMountains = [
    { name: "Bobija" },
    { name: "Canyon of Nera" },
    { name: "Goc" },
    { name: "Golija" },
    { name: "Homoljske mountains" },
    { name: "Maljen" },
    { name: "Lazarev Canyon" },
    { name: "Ovcar" },
    { name: "Rtanj" },
    { name: "Rudnik" },
    { name: "Suva Mountain" },
    { name: "Stolovi" },
    { name: "Tara" },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography color="myColors.secondary" sx={{ fontSize: "18px" }}>
          Filters
        </Typography>
        <div
          style={{
            marginBottom: "10px",
            width: width > 899 ? "60%" : "20%",
            height: "2px",
            borderRadius: "1px",
            backgroundColor: "#0092FF",
          }}
        ></div>
      </div>
      {allMountains.map((item, id) => (
        <Fab
          key={id}
          sx={{
            margin: "0.2rem",
            boxShadow: "none",
            border: "solid 2px #F6BE3B",
          }}
          color="myColors"
          variant="extended"
          size="small"
          onClick={() => {
            setPic(() => filter.filter((i) => i.mountain === item.name));
            setHidePagination(() => false);
          }}
        >
          <Typography
            variant="h4"
            color="myColors.white"
            sx={{ fontSize: "80%" }}
          >
            {" "}
            {item.name}{" "}
          </Typography>
        </Fab>
      ))}
    </div>
  );
};

export default Filters;
