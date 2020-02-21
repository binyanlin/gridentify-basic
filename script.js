// $(document).ready(function() {
//start code

//define variables
const board = [];
const xCoord = ["A", "B", "C", "D", "E"];
const yCoord = ["1", "2", "3", "4", "5"];

//initializing board function
const generateBoard = function() {
  while (board.length<5) {
    let arr1 = [];
    for(let i=0; i<5; i++) {
      arr1.push(Math.ceil(Math.random()*3));
    };
    board.push(arr1);
  }
}

generateBoard();

const colorBoard = function() {
  for (let i=0; i<5; i++) {
    for (let j=0; j<5; j++) {
      let temp;
      if (board[i][j] == 1) {
        temp = "purple1";
      } else if (board[i][j] == 2) {
        temp = "purple2";
      } else if (board[i][j] == 3) {
        temp = "purple3";
      } else {
        temp = "purple4"
      }
      $("#" + xCoord[i] + yCoord[j]).addClass(temp);
    }
  }
}



//end document.ready
// });