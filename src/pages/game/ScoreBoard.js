import { myStyles } from "../../assets/myStyles";
import { Typography } from "@mui/material";
const ScoreBoard = ({ scoreDisplay, theme }) => {
  return (
    <div style={myStyles.mainBox}>
      <Typography sx={myStyles.infoText}>
        Swap images to create set of 3 or 4 maching images
      </Typography>
      <div
        style={{
          ...myStyles.scoreBox,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <div style={{ fontSize: "1.4rem" }}>Score </div>
        <div style={{ fontSize: "1.4rem" }}>{scoreDisplay}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
