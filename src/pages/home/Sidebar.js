import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-scroll";
import { sxStyles } from "../../assets/myStyles";
import { sidebarItems } from "../../data/dataItems";

const active = {
  borderBottom: "3px solid #F6BE3B",
};

const Sidebar = () => {
  return (
    <>
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.id}>
            <Link
              to={item.name}
              spy={true}
              smooth={true}
              offset={-110}
              duration={800}
              style={{ width: "100%" }}
              activeStyle={active}
            >
              <ListItemButton>
                <ListItemIcon>{item.img}</ListItemIcon>
                <ListItemText
                  primary={item.name}
                  disableTypography
                  sx={{ fontSize: "19px", color: "secondary.main" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
