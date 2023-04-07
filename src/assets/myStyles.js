export const myStyles = {
  //Navbar start
  routerItem: {
    fontSize: "1rem",
    color: "#0092FF",
    textDecoration: "none",
  },
  routerItemActive: {
    color: "#F6BE3B",
    fontSize: "1rem",
    textDecoration: "none",
  },
  //Navbar end

  //DropMenu starts
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

  //DropMenu ends

  //Game starts
  mainDiv: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "110px",
    paddingBottom: "260px",
    height: "100%",
  },

  scoreBox: {
    width: "130px",
    height: "70px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 0 auto",
  },
  mainBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto 0 auto",
  },
  infoText: {
    textAlign: "center",
    fontSize: "20px",
    margin: "10px",
  },

  //Game ends
};
