//This function create array with random elements of one smaller array
export const createBoard = (board, colors) => {
  const randomColorArrangament = [];
  for (let i = 0; i < 64; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    randomColorArrangament.push(randomColor);
  }
  board(randomColorArrangament);
};
