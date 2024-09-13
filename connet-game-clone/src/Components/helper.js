export const isWinner = (gameBoard, currentMove, currentPlayer, No_player) => {
  let borad = [...gameBoard]; // here we created a copy of array of state
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

export const isDraw = (gameBoard, currentMove, currentPlayer) => {
  // we created that to determine when the game draw and no budy wins the game
  let Borad = [...gameBoard];
  Borad[currentMove] = currentPlayer;
  let count = Borad.reduce((n, x) => n + (x === 0), 0);
  console.log(`count ${count}`);
  return count === 0;
};

// export const getComputerMove = (GameBoard) => {
//   // if (!Array.isArray(gameBoard)) {
//   //   throw new Error("gameBoard must be an array");
//   // }

//   // let emptyCircles = gameBoard.reduce((acc, circle, index) => {
//   //   if (circle === No_player) {
//   //     acc.push(index);
//   //   }
//   //   return acc;
//   // }, []);

//   // let random = emptyCircles[Math.floor(Math.random() * emptyCircles.length)];
//   // onCircleClicked(random);

//   for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard[i] === No_player) {
//       validMove.push(i);
//     }
//   }

//   let random = emptyCircles[Math.floor(Math.random() * emptyCircles.length)];
//   onCircleClicked(random);
// };

const getRandomComputerMove = (gameBoard, onCircleClicked) => {
  // let emptyCircles = gameBoard.reduce((acc, circle, index) => {
  //   if (circle === No_player) {
  //     acc.push(index);
  //   }
  //   return acc;
  // }, []);
  // let random = emptyCircles[Math.floor(Math.random() * emptyCircles.length)];
  // onCircleClicked(random);

  let validMove = [];
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 0) {
      validMove.push(i);
    }
  }
  let rndMove = Math.floor(Math.random() * validMove.length);
  return validMove[rndMove];
};

// const getPosition = (gameBoard, moveCheck) => {
//   for (let check = 0; check < moveCheck.length; check++) {
//     for (let i = 0; i < moveCheck[check].max; i += moveCheck[check].step) {
//       let series =
//         gameBoard[i + moveCheck[check].indexes[0]].toString() +
//         gameBoard[i + moveCheck[check].indexes[1]].toString() +
//         gameBoard[i + moveCheck[check].indexes[2]].toString() +
//         gameBoard[i + moveCheck[check].indexes[3]].toString();

//       switch (series) {
//         // case "0222":  // my code
//         //   return i + moveCheck[check].indexes[0];
//         // case "2022":
//         //   return i + moveCheck[check].indexes[1];
//         // case "2202":
//         //   return i + moveCheck[check].indexes[2];
//         // case "2220":
//         //   return i + moveCheck[check].indexes[3];

//         case "1110":
//         case "2220":
//           return i + moveCheck[check].indexes[3];
//         case "1101":
//         case "2202":
//           return i + moveCheck[check].indexes[2];
//         case "1011":
//         case "2022":
//           return i + moveCheck[check].indexes[1];
//         case "0111":
//         case "0222":
//           return i + moveCheck[check].indexes[0];
//         default:
//           break;
//       }
//     }
//   }
//   return -1;
// };

// export const getComputerMove = (gameBoard) => {
//   let moveCheck = [
//     {
//       // vertical moves
//       indexe: [0, 4, 8, 12],
//       max: 4,
//       step: 1,
//     },
//     {
//       // horizontal moves
//       indexe: [0, 1, 2, 3],
//       max: 16,
//       step: 4,
//     },
//     {
//       // diagonal moves
//       indexe: [0, 5, 10, 15],
//       max: 16,
//       step: 16,
//     },
//     {
//       // diagonal moves
//       indexe: [3, 6, 9, 12],
//       max: 16,
//       step: 16,
//     },
//   ];

//   let position = getPosition(gameBoard, moveCheck);
//   if (position > -1) return position;

//   return getRandomComputerMove(gameBoard);

//   // for (let i = 0; i < moveCheck.length; i++) {
//   //   let { indexe, max, step } = moveCheck[i];
//   //   for (let j = 0; j < indexe.length; j++) {
//   //     let count = 0;
//   //     let empty = -1;
//   //     for (let k = 0; k < max; k++) {
//   //       let index = indexe[j] + k * step;
//   //       if (gameBoard[index] === 2) {
//   //         count++;
//   //       } else if (gameBoard[index] === 0) {
//   //         empty = index;
//   //       }
//   //     }
//   //     if (count === 3 && empty !== -1) {
//   //       return empty;
//   //     }
//   //   }
//   // }
// };

const getPosition = (gameBoard, moveCheck) => {
  for (let check = 0; check < moveCheck.length; check++) {
    for (let i = 0; i < moveCheck[check].max; i += moveCheck[check].step) {
      let series =
        gameBoard[i + moveCheck[check].indexes[0]].toString() +
        gameBoard[i + moveCheck[check].indexes[1]].toString() +
        gameBoard[i + moveCheck[check].indexes[2]].toString() +
        gameBoard[i + moveCheck[check].indexes[3]].toString();

      switch (series) {
        case "1110":
        case "2220":
          return i + moveCheck[check].indexes[3];
        case "1101":
        case "2202":
          return i + moveCheck[check].indexes[2];
        case "1011":
        case "2022":
          return i + moveCheck[check].indexes[1];
        case "0111":
        case "0222":
          return i + moveCheck[check].indexes[0];
        default:
          break;
      }
    }
  }
  return -1;
};

export const getComputerMove = (gameBoard) => {
  let moveCheck = [
    {
      // vertical moves
      indexes: [0, 4, 8, 12],
      max: 4, // max represents how many rows we can check (4 rows in vertical direction)
      step: 1,
    },
    {
      // horizontal moves
      indexes: [0, 1, 2, 3],
      max: 16, // check all 16 positions for horizontal move checks
      step: 4,
    },
    {
      // diagonal moves (top-left to bottom-right)
      indexes: [0, 5, 10, 15],
      max: 16, // diagonal checks
      step: 16,
    },
    {
      // diagonal moves (top-right to bottom-left)
      indexes: [3, 6, 9, 12],
      max: 16,
      step: 16,
    },
  ];

  let position = getPosition(gameBoard, moveCheck);
  /* The line `if (position - 1) return position;` in the `getComputerMove` function is checking if the
  `position` variable is not equal to -1. */
  if (position > -1) return position;

  return getRandomComputerMove(gameBoard);
};
