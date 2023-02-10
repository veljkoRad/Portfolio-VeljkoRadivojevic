import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Api from "./pages/api/Api";
import PhotoDetail from "./pages/api/PhotoDetail";
import Game from "./pages/game/Game";
import { CssBaseline, createTheme } from "@mui/material";
import { sidebarItems } from "./data/sidebarItems";
import { sxStyles } from "./assets/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropMenu from "./components/DropMenu";

function App() {
  const fontTheme = createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      allVariants: {
        color: "#0092FF",
        fontSize: "1.5rem",
      },
    },
  });

  const [width, setWidth] = useState(window.innerWidth);
  const [hidePagination, setHidePagination] = useState(true);
  const [num, setNum] = useState(1);
  const [pic, setPic] = useState([]);
  const [navBtn, setNavBtn] = useState(false);

  let api = `http://localhost:5000/photos?_page=${num}&_limit=8`;
  useEffect(() => {
    axios.get(api).then((res) => setPic(res.data));
  }, [api]);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        <CssBaseline />
        <Navbar
          sxStyles={sxStyles}
          width={width}
          navBtn={navBtn}
          setNavBtn={setNavBtn}
          theme={fontTheme}
        />
        {navBtn ? (
          <div
            style={{
              position: "fixed",
              transform: "translateY(0%)",
              transition: "all 1s",
              zIndex: 100,
            }}
          >
            <DropMenu
              sxStyles={sxStyles}
              setNavBtn={setNavBtn}
              navBtn={navBtn}
            />
          </div>
        ) : (
          <div
            style={{
              position: "fixed",
              transform: "translateY(-150%)",
              transition: "all 1s",
              zIndex: 100,
            }}
          >
            <DropMenu
              sxStyles={sxStyles}
              setNavBtn={setNavBtn}
              navBtn={navBtn}
            />
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                width={width}
                sidebarItems={sidebarItems}
                sxStyles={sxStyles}
                fontTheme={fontTheme}
              />
            }
          ></Route>
          <Route
            path="/api"
            element={
              <Api
                pic={pic}
                setPic={setPic}
                setNum={setNum}
                num={num}
                api={api}
                width={width}
                hidePagination={hidePagination}
                setHidePagination={setHidePagination}
                fontTheme={fontTheme}
              />
            }
          ></Route>
          <Route
            path="/api/:id"
            element={<PhotoDetail pic={pic} width={width} />}
          ></Route>

          <Route path="/game" element={<Game wiDth={width} />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
