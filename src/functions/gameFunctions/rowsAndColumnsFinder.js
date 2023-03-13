export const checkForRowOfThree = (board, scoreDis, empty) => {
  for (let i = 0; i < 64; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const decidedColor = board[i];
    const isBlank = board[i] === empty;
    const notValid = [
      6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
    ];
    if (notValid.includes(i)) continue;
    //znaci kada i=6 to znaci da ovaj niz to ima,i znacu da je true.a Kada je true neka nastavi dalje.Continue znaci da ako je true preskace taj loop.
    if (
      rowOfThree.every((number) => board[number] === decidedColor && !isBlank)
    ) {
      scoreDis((score) => score + 3);
      rowOfThree.forEach((number) => (board[number] = empty));
      return true;
    }
  }
};

export const checkForRowOfFour = (board, scoreDis, empty) => {
  for (let i = 0; i < 64; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor = board[i];
    const isBlank = board[i] === empty;
    const notValid = [
      5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
      54, 55, 62, 63, 64,
    ];
    if (notValid.includes(i)) continue;
    if (
      rowOfFour.every((number) => board[number] === decidedColor && !isBlank)
    ) {
      scoreDis((score) => score + 4);
      rowOfFour.forEach((number) => (board[number] = empty));
      return true;
    }
  }
};

export const checkForColumnOfThree = (board, scoreDis, empty) => {
  for (let i = 0; i <= 47; i++) {
    const columnOfThree = [i, i + 8, i + 8 * 2];
    const decidedColor = board[i];
    const isBlank = board[i] === empty;
    if (
      columnOfThree.every(
        (number) => board[number] === decidedColor && !isBlank
      )
    ) {
      scoreDis((score) => score + 3);
      columnOfThree.forEach((number) => (board[number] = empty));
      return true;
    }
  }
};

export const checkForColumnOfFour = (board, scoreDis, empty) => {
  for (let i = 0; i <= 39; i++) {
    const columnOfFour = [i, i + 8, i + 8 * 2, i + 8 * 3];
    const decidedColor = board[i];
    const isBlank = board[i] === empty;
    if (
      columnOfFour.every((number) => board[number] === decidedColor && !isBlank)
    ) {
      scoreDis((score) => score + 4);
      columnOfFour.forEach((number) => (board[number] = empty));
      return true;
    }
  }
};
// useCallback koristio sam ga jer mi je prikazivao gresku useEffect kad stavim da prati ovu funkciju.
