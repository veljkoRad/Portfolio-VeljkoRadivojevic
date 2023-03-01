import { myStyles } from "../../assets/myStyles";

const ScoreBoard = ({ scoreDisplay, theme }) => {
  return (
    <div
      style={{
        ...myStyles.scoreBox,
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <div style={{ fontSize: "1.4rem" }}>Score </div>
      <div style={{ fontSize: "1.4rem" }}>{scoreDisplay}</div>
    </div>
  );
};

export default ScoreBoard;
