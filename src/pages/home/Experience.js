import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { iconsArr, iconsArr2 } from "../../data/dataItems";

const iconsDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Experience = ({ width }) => {
  const languageInfo = {
    paddingTop: "6px",
    color: "secondary",
    fontSize: width > 480 ? "1.1rem" : "0.7rem",
  };

  return (
    <Card id="experience" name="Experience">
      <CardContent>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "20px" }}>
            <Typography color="info.main" sx={{ opacity: 0.9 }}>
              Current skills
            </Typography>
          </Grid>
          {iconsArr.map((arr, id) => (
            <Grid item key={id} xs={4} sm={3} sx={{ margin: "10px 0 10px 0" }}>
              <div style={iconsDiv}>
                <Avatar>
                  <img src={arr.img} alt="" width="60%" />
                </Avatar>

                <Typography sx={languageInfo}>{arr.name}</Typography>
              </div>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", marginBottom: "20px" }}>
            <Typography color="info.main" sx={{ opacity: 0.9 }}>
              Sources of learning
            </Typography>
          </Grid>
          {iconsArr2.map((item, id) => (
            <Grid item key={id} xs={4} sm={3} sx={{ margin: "10px 0 10px 0" }}>
              <div style={iconsDiv}>
                <Avatar>
                  <img src={item.img} alt="" width="70%" />
                </Avatar>
                <Typography sx={languageInfo}>{item.name}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Experience;
