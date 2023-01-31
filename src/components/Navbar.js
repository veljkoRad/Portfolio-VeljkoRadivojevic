import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ sxStyles, width, navBtn, setNavBtn }) => {
  return (
    <AppBar sx={{ backgroundColor: "rgba(0,0,70)" }} position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ color: "myColors.main" }}>
          Veljko Radivojevic
        </Typography>
        {width < 600 ? (
          <Button
            sx={{ marginLeft: "auto" }}
            onClick={() => {
              setNavBtn(!navBtn);
            }}
          >
            <MenuIcon />
          </Button>
        ) : (
          <Breadcrumbs sx={sxStyles.routerItems}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? sxStyles.routerItemActive
                  : sxStyles.routerItem;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/api"
              style={({ isActive }) => {
                return isActive
                  ? sxStyles.routerItemActive
                  : sxStyles.routerItem;
              }}
            >
              Album
            </NavLink>
            <NavLink
              to="/game"
              style={({ isActive }) => {
                return isActive
                  ? sxStyles.routerItemActive
                  : sxStyles.routerItem;
              }}
            >
              Game
            </NavLink>
          </Breadcrumbs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
