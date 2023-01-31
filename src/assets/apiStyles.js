import trem from "./photos&images/trem.jpg";
export const apiStyles = {
  main: {
    width: "100%",
    backgroundImage: `url(${trem})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingBottom: "2rem",
  },
  firstContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2rem",
    color: "#131313",
    marginBottom: "2rem",
  },
  photoItem: {
    backgroundColor: "rgba(0,0,70,0.7)",
    border: "solid 2px #000046",
    borderRadius: "6px",
    "&:hover": { transform: " translate(0,-10px)" },
  },
  filterComp: {
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem auto 0 auto",
  },
  photoContent: {
    color: "myColors.white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // PhotoDetails start
  backArrow: {
    top: "20px",
    left: "10px",
    position: "relative",
  },
  cardPhoto: {
    border: "solid 2px #000046",
    borderRadius: "6px",
    width: "80%",
  },
  //PhotoDetails end
};
