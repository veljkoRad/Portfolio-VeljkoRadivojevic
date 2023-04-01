import { NavLink } from "react-router-dom";
import { myStyles } from "../assets/myStyles";
import { breadcrumbList } from "../data/dataItems";

const menuStyle = {
  paddingTop: "100px",
  backgroundColor: "rgba(10,25,47,0.7)",
  height: "100%",
  width: "100vw",
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  alignItems: "center",
};

const DropMenu = ({ setNavBtn }) => {
  return (
    <div style={menuStyle}>
      {breadcrumbList.map((item, id) => (
        <NavLink
          key={id}
          onClick={() => setNavBtn(false)}
          to={item.location}
          style={({ isActive }) => {
            return isActive
              ? myStyles.responsiveRouterActive
              : myStyles.responsiveRouter;
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default DropMenu;
