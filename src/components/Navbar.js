import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Breadcrumbs,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { myStyles } from "../assets/myStyles";
import { breadcrumbList } from "../data/dataItems";
import { Link } from "react-scroll";

const Navbar = ({ width, navBtn, setNavBtn }) => {
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <Link
          smooth={true}
          to="About"
          duration={800}
          offset={-110}
          style={{ cursor: "pointer" }}
        >
          <Typography variant="h6" color="secondary">
            Veljko Radivojevic
          </Typography>
        </Link>

        {width < 600 ? (
          <Button
            sx={{ marginLeft: "auto" }}
            onClick={() => {
              setNavBtn(!navBtn);
            }}
          >
            <MenuIcon color="secondary" />
          </Button>
        ) : (
          <Breadcrumbs separator="">
            {breadcrumbList.map((item, id) => (
              <NavLink
                key={id}
                to={item.location}
                style={({ isActive }) => {
                  return isActive
                    ? myStyles.routerItemActive
                    : myStyles.routerItem;
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </Breadcrumbs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
