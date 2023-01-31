import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/";

const theme = createTheme({
  palette: {
    myColors: {
      primary: "#131313",
      white: "#fff",
      blue: "#000046",
      main: "#1cb5e0",
      gray: "#9ec6b8",
    },
    myColors2: {
      main: "#000046",
    },
    myColors3: {
      main: "rgba(0,0,70,0.7)",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
