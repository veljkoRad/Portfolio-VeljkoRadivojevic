import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropMenu from "./components/DropMenu";
import Navbar from "./components/Navbar";
import Api from "./pages/api/Api";
import PhotoDetail from "./pages/api/PhotoDetail";
import Game from "./pages/game/Game";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import axios from "axios";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [navBtn, setNavBtn] = useState(false);
  const [pic, setPic] = useState([]);

  let api =
    "https://bright-bittersweet-nose.glitch.me/json-server-deploy-master/db.json";

  useEffect(() => {
    axios.get(api).then((res) => setPic(res.data.photos));
  }, []);

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
        <CssBaseline sx={{ overflow: "hidden" }} />
        <Navbar width={width} navBtn={navBtn} setNavBtn={setNavBtn} />
        {navBtn ? (
          <div
            style={{
              position: "fixed",
              transform: "translateY(0%)",
              transition: "all 1s",
              zIndex: 100,
            }}
          >
            <DropMenu setNavBtn={setNavBtn} />
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
            <DropMenu setNavBtn={setNavBtn} />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home width={width} />}></Route>

          <Route
            path="/api"
            element={<Api width={width} pic={pic} api={api} />}
          ></Route>
          <Route
            path="/api/:userId"
            element={<PhotoDetail width={width} pic={pic} />}
          ></Route>

          <Route path="/game" element={<Game wiDth={width} />}></Route>

          <Route path="/projects" element={<Projects width={width} />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
