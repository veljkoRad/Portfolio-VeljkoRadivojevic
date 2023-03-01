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
    paddingTop: "80px",
    paddingBottom: "30px",
    height: "100%",
  },
  myGame: {
    width: "560px",
    height: "560px",
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto 0 auto",
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

  //Game ends
};
