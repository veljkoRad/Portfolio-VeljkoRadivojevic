import { Fab, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { allMountains } from "../../data/dataItems";

const Filters = ({ setHidePagination, width, pic, setCutPic }) => {
  const theme = useTheme();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "5px",
        }}
      >
        <Typography sx={{ fontSize: "18px" }}>Filters</Typography>
        <div
          style={{
            marginBottom: "10px",
            width: width > 899 ? "60%" : "20%",
            height: "2px",
            borderRadius: "1px",
            backgroundColor: theme.palette.secondary.main,
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
          color="primary"
          variant="extended"
          size="small"
          onClick={() => {
            setCutPic(() => pic.filter((i) => i.mountain === item.name));
            setHidePagination(() => false);
          }}
        >
          <Typography variant="h4" color="info.main" sx={{ fontSize: "80%" }}>
            {" "}
            {item.name}{" "}
          </Typography>
        </Fab>
      ))}
    </div>
  );
};

export default Filters;
