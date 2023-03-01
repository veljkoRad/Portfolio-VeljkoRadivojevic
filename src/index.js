import { createTheme, ThemeProvider } from "@mui/material/";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: { main: "#0A192F" },
    secondary: { main: "#0092FF" },
    error: { main: "#F6BE3B" },
    info: { main: "#F1F1E6" },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.info.main,
          width: 55,
          height: 55,
        }),
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginLeft: "auto",
          marginRight: "2rem",
          color: theme.palette.info.main,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
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
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          paddingLeft: "5px",
          paddingRight: "5px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.palette.error.main,
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          position: "sticky",
          top: "0",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(28,181,224,0.2)",
          },
          flexDirection: "column",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.secondary.main,
          justifyContent: "center",
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.secondary.main,
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.info.main,
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: ["Lato", "sans-serif"].join(","),
          color: theme.palette.secondary.main,
          fontSize: "1.5rem",
        }),
      },
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
