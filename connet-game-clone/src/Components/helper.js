export const isWinner = (gameState, currentMove, currentPlayer) => {
  let borad = [...gameState];
  borad[currentMove] = currentPlayer;

  const winList = [
    // thsi the list of all winning combination which make player to win
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 16],
    [3, 6, 9, 12],
  ];

  for (let i = 0; i < winList.length; i++) {
    const [c1, c2, c3, c4] = winList[i];

    if (
      borad[c1] > 0 &&
      borad[c1] === borad[c2] &&
      borad[c2] === borad[c3] &&
      borad[c3] === borad[c4]
    ) {
      return true;
    }
  }
  return false;
};
