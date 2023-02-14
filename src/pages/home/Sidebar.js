import { Link } from "react-scroll";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = ({ sidebarItems, sxStyles }) => {
  return (
    <>
      <List sx={sxStyles.sidebarList}>
        {sidebarItems.map((item) => (
          <ListItem key={item.id} sx={sxStyles.sidebarItems}>
            <Link
              to={item.name}
              spy={true}
              smooth={true}
              offset={-110}
              duration={800}
              style={{ width: "100%" }}
              activeStyle={sxStyles.active}
            >
              <ListItemButton sx={sxStyles.sidebarButtons}>
                <ListItemIcon sx={sxStyles.sidebarIcons}>
                  {item.img}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ color: "myColors.secondary" }}
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
