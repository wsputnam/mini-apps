console.log('connected');

var turn = true;
var xMarks = [];
var oMarks = [];

var score = {
    X: 0,
    O: 0
}
var winningCombos = [["1", "2", "3"], ["4","5","6"], ["7","8","9"], ["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"], ["3","5","7"]];

var smallBoxes = document.getElementsByClassName('box');
for (var i = 0; i < smallBoxes.length; i++) {
    smallBoxes[i].addEventListener('click', playerMark);
}
var reset = document.getElementById('boardReset');
reset.addEventListener('click', playNewGame);

function playerMark() {
  if (event.target.innerHTML.length === 0) {
      if (turn === true) {
          xMarks.push(event.target.id);
          event.target.innerHTML = "X";
          event.target.style.background = "red";
      } else {
          oMarks.push(event.target.id);
          event.target.innerHTML = "O";
          event.target.style.background = "blue";
      }
  } else {
      alert ('Already clicked. Please try another square');
  }
  turn = !turn;
  isWinner(xMarks, "X");
  isWinner(oMarks, "O");
}

function isWinner(marksArray, name) {
    var checks = 0;
    for (i = 0; i < winningCombos.length; i++) {
        for (var j = 0; j < winningCombos[i].length; j++) {
            if (marksArray.indexOf(winningCombos[i][j]) !== -1) {
                checks++;
            }
        }
        if (checks === 3) {
            playNewGame();
        }
    }
}

function playNewGame() {
    var squares = document.getElementsByClassName('box');
    console.log(squares);
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
        squares[i].style.removeProperty('background');
    }
}