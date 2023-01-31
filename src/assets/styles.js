export const sxStyles = {
  //Navbar start
  routerItems: {
    marginLeft: "auto",
    marginRight: "2rem",
    color: "#fff",
  },
  routerItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.3rem",
  },
  routerItemActive: {
    color: "#1cb5e0",
    fontSize: "1.2rem",
    textDecoration: "none",
  },
  responsiveRouter: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    "&:hover": {
      color: "red",
    },
  },
  responsiveRouterActive: {
    color: "#1cb5e0",
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
    color: "myColors.white",
    justifyContent: "center",
  },
  active: {
    borderBottom: "3px solid #fff",
  },
  //Sidebar Component end

  //  About Component start
  mainCard1: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    maxWidth: 500,
    width: "100%",
    height: "80vh",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "20px",
    backgroundColor: "rgba(28,181,224,0.5)",
    "&:hover": { boxShadow: "10px 10px 20px #9ec6b8" },
  },
  profilePic: {
    width: 180,
    height: 180,
    marginRight: "40px",
    marginLeft: "auto",
    "&:hover": { border: "2px solid #fff" },
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
    backgroundColor: "rgba(28,181,224, 0.2)",
    borderRadius: "20px",
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
    backgroundColor: "rgba(0,0,70,0.5)",
    "&:hover": { boxShadow: "10px 10px 20px #9ec6b8" },
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
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
  iconsDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconsRow: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  wholeRow: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2rem",
    gap: "0.5rem",
    textAlign: "center",
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
    color: "myColors.white",
    fontSize: "2rem",
    "&:hover": {
      color: "#9ec6b8",
    },
  },
  mailLink: {
    "&:hover": {
      color: "#9ec6b8",
    },
  },
  //Contact Component end
};
