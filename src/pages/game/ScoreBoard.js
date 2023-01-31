const ScoreBoard = ({ scoreDisplay, gameStyles }) => {
  return (
    <div style={gameStyles.scoreBox}>
      <p style={gameStyles.scoreText}>Score </p>
      <p style={gameStyles.scoreText}>{scoreDisplay}</p>
    </div>
  );
};

export default ScoreBoard;
