import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ sxStyles, width, navBtn, setNavBtn, theme }) => {
  return (
    <AppBar sx={{ backgroundColor: "myColors.main" }} position="relative">
      <Toolbar>
        <ThemeProvider theme={theme}>
          <Typography variant="h6" sx={{ color: "myColors.secondary" }}>
            Veljko Radivojevic
          </Typography>
        </ThemeProvider>
        {width < 600 ? (
          <Button
            sx={{ marginLeft: "auto" }}
            onClick={() => {
              setNavBtn(!navBtn);
            }}
          >
            <MenuIcon sx={{ color: "myColors.secondary" }} />
          </Button>
        ) : (
          <Breadcrumbs separator="" sx={sxStyles.routerItems}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? sxStyles.routerItemActive
                  : sxStyles.routerItem;
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>Home</Typography>
            </NavLink>

            <NavLink
              to="/api"
              style={({ isActive }) => {
                return isActive
                  ? sxStyles.routerItemActive
                  : sxStyles.routerItem;
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>Album</Typography>
            </NavLink>
            <NavLink
              to="/game"
              style={({ isActive }) => {
                return isActive
                  ? sxStyles.routerItemActive
                  : sxStyles.routerItem;
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>Game</Typography>
            </NavLink>
          </Breadcrumbs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
