const ScoreBoard = ({ scoreDisplay, gameStyles }) => {
  return (
    <div style={gameStyles.scoreBox}>
      <div style={gameStyles.scoreText}>Score </div>
      <div style={gameStyles.scoreText}>{scoreDisplay}</div>
    </div>
  );
};

export default ScoreBoard;
