export const moveIntoSquareBelow = (board, colors, empty) => {
  for (let i = 0; i <= 63; i++) {
    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
    const isFirstRow = firstRow.includes(i);

    if (isFirstRow && board[i] === empty) {
      let randomNumber = Math.floor(Math.random() * colors.length);
      board[i] = colors[randomNumber];
    }

    if (board[i + 8] === empty) {
      board[i + 8] = board[i];
      board[i] = empty;
    }
  }
};
