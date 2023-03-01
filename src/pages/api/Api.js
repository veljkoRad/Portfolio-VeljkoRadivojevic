import {
  Container,
  Grid,
  Pagination,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import DefaultPhotos from "./DefaultPhotos";
import Filters from "./Filters";
import Photos from "./Photos";

const Api = ({ width }) => {
  const [num, setNum] = useState(1);
  const [pic, setPic] = useState([]);
  const [hidePagination, setHidePagination] = useState(true);

  const theme = useTheme();
  const StyledGrid = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem auto 0 auto",
  }));
  const main = {
    width: "100%",
    paddingTop: "64px",
    paddingBottom: "2rem",
    backgroundColor: theme.palette.primary.main,
  };

  let api = `http://localhost:5000/photos?_page=${num}&_limit=8`;
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setPic(res.data))
      .catch((err) =>
        window.alert("Start server for images using npr server or yarn server.")
      );
  }, [num]);

  return (
    <div style={main}>
      <Container sx={{ paddingTop: "2rem", marginBottom: "2rem" }}>
        <Typography
          sx={{ opacity: 0.9, fontSize: width > 380 ? "50px" : "35px" }}
          align="center"
          gutterBottom
        >
          Mountains of Serbia
        </Typography>
        <Typography
          sx={{ opacity: 0.8, fontSize: width > 380 ? "24px" : "17px" }}
          align="center"
        >
          This is presentation of my hobbie.All photos are created on my
          journeys, with my mobile camera.
        </Typography>
      </Container>
      <Grid container>
        {hidePagination ? (
          <StyledGrid item xs={11}>
            <Pagination
              size={width < 380 ? "small" : "medium"}
              count={11}
              color="error"
              siblingCount={0}
              boundaryCount={2}
              shape="rounded"
              onChange={(e, p) => setNum(p)}
              defaultPage={num}
            ></Pagination>
          </StyledGrid>
        ) : (
          <StyledGrid item xs={11}>
            <DefaultPhotos
              setHidePagination={setHidePagination}
              setPic={setPic}
              setNum={setNum}
              api={api}
            />
          </StyledGrid>
        )}
        <StyledGrid item xs={11} md={2}>
          <Filters
            setPic={setPic}
            setHidePagination={setHidePagination}
            width={width}
          />
        </StyledGrid>
        <Grid
          item
          container
          xs={11}
          md={9}
          spacing={2}
          sx={{ margin: "0.7rem auto 0 auto" }}
        >
          <Photos pic={pic} width={width} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Api;
