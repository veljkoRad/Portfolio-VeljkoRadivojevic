export const moveIntoSquareBelow = (board, colors, empty) => {
  for (let i = 0; i <= 63; i++) {
    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
    const isFirstRow = firstRow.includes(i);
    //sa ovim ispod popunjavamo prvu praznu kolonu
    if (isFirstRow && board[i] === empty) {
      let randomNumber = Math.floor(Math.random() * colors.length);
      board[i] = colors[randomNumber];
    }
    //Ako loop sadrzi neki od fristRow brojeva I ako je blank,onda ide ovaj return
    if (board[i + 8] === empty) {
      board[i + 8] = board[i];
      board[i] = empty;
    }
    //Ako nam je boja ispod trenutnog loopa (i) prazna,zelimo da taj trenutni lup prebaci tu boju
  }
};
