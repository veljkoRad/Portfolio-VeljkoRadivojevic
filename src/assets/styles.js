import { ThemeProvider } from "@mui/material";
export const sxStyles = {
  //Navbar start
  routerItems: {
    marginLeft: "auto",
    marginRight: "2rem",
    color: "#F1F1E6",
  },
  routerItem: {
    color: "#0092FF",
    textDecoration: "none",
    fontSize: "1.4rem",
  },
  routerItemActive: {
    color: "#F6BE3B",
    fontSize: "1.4rem",
    textDecoration: "none",
  },
  responsiveRouter: {
    color: "#0092FF",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    "&:hover": {
      color: "red",
    },
  },
  responsiveRouterActive: {
    color: "#F6BE3B",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  //Navbar end

  //Home Component start
  aboutMain: {
    display: "flex",
    gap: "90px",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "static",
    paddingTop: "90px",
    paddingBottom: "90px",
  },
  //Home Component end

  //Sidebar Component start
  sidebarList: {
    position: "sticky",
    top: "0",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sidebarButtons: {
    "&:hover": {
      backgroundColor: "rgba(28,181,224,0.2)",
    },
    flexDirection: "column",
  },
  sidebarItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebarIcons: {
    color: "myColors.secondary",
    justifyContent: "center",
  },
  active: {
    borderBottom: "3px solid #F6BE3B",
  },
  //Sidebar Component end

  //  About Component start
  mainCard1: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    maxWidth: 500,
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-evenly",
    boxShadow: "none",
    backgroundColor: "inherit",
  },
  profilePic: {
    width: 170,
    height: 170,
    marginRight: "20%",
    marginLeft: "auto",
    border: "2px solid #F6BE3B",
  },
  //  About Component end

  //Education Component start
  educationComp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "myColors.white",
  },
  divColored: {
    backgroundColor: "inherit",
    color: "#F1F1E6",
    borderRadius: "20px",
    border: "solid 1px #F6BE3B",
    padding: "10px 10px 10px 15px",
  },
  //Education Component end

  // Experience Component start
  mainCard2: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    maxWidth: 500,
    width: "100%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: "inherit",
    boxShadow: "none",
  },
  avatarProp: {
    backgroundColor: "#F1F1E6",
    width: 55,
    height: 55,
  },
  experienceComp: {
    color: "#131313",
    display: "flex",
    flexDirection: "column",
  },
  divColored2: {
    marginBottom: "25px",
    backgroundColor: "rgba(0,0,70, 0.2)",
    borderRadius: "20px",
    padding: "10px 10px 10px 15px",
  },
  languageInfo: {
    paddingTop: "6px",
    color: "#0092FF",
  },
  iconsDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  //Experience Component end

  //Contact Component start
  contactCard: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "2.5rem",
  },
  contactMe: {
    marginLeft: "auto",
    marginBottom: "-2.5rem",
  },
  linkIcons: {
    color: "myColors.third",
    fontSize: "2rem",
    "&:hover": {
      color: "#9ec6b8",
    },
  },
  mailLink: {
    fontSize: "1rem",
    color: "#0092FF",
    "&:hover": {
      color: "#9ec6b8",
    },
  },
  //Contact Component end
};
