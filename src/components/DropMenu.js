import { SportsRugbySharp } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const DropMenu = ({ sxStyles, setNavBtn }) => {
  const menuStyle = {
    padding: "2rem",
    backgroundColor: "rgba(10,25,47,0.7)",
    height: "100%",
    width: "100vw",
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={menuStyle}>
      <NavLink
        onClick={() => setNavBtn(false)}
        to="/"
        style={({ isActive }) => {
          return isActive
            ? sxStyles.responsiveRouterActive
            : sxStyles.responsiveRouter;
        }}
      >
        Portfolio
      </NavLink>
      <NavLink
        onClick={() => setNavBtn(false)}
        to="/api"
        style={({ isActive }) => {
          return isActive
            ? sxStyles.responsiveRouterActive
            : sxStyles.responsiveRouter;
        }}
      >
        Album
      </NavLink>
      <NavLink
        onClick={() => setNavBtn(false)}
        to="/game"
        style={({ isActive }) => {
          return isActive
            ? sxStyles.responsiveRouterActive
            : sxStyles.responsiveRouter;
        }}
      >
        Game
      </NavLink>
    </div>
  );
};

export default DropMenu;
