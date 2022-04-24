const gameBoard = () => {
  let boardState = [
    0, 1, 1,
    0, 0, 1,
    1, 0, 1
  ];
  const logBoard = () => {
    boardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    console.log(`Board reset. Current Board: ${boardState}`)
  };

  return {logBoard};
};


const Player = (mark) => {
  let plays = [];
  return {mark};
}