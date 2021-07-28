//1) Define required constants
const colors = [null, null, null, null, null, null, null, null, null]
//1.2) Define the 8 possible winning combinations, each containing three indexes of the board that make a winner if they hold the same player value.
const wins =[
[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
//2.1) Use a board array to represent the squares.

let game = document.querySelectorAll('.board-container');
game = colors;
//2.2) Use a turn variable to remember whose turn it is.
let turn = 1;
//2.3) Use a winner variable to represent three different possibilities - player that won, a tie, or game in play.
let winner;

// 3.1) Store the 9 elements that represent the squares on the page.
let square = document.querySelectorAll('.square');

let results = document.querySelector('.results');
let win = null

let reset = document.querySelector('.button')
reset.addEventListener('click',resetGame);



square.forEach((el) => el.addEventListener('click',gameBoard));
// function clicked(evt){
//     let clicking = evt.target;
    

// };

function gameBoard(evt) {
    let displayText = evt.target
    let squareClicked = evt.target.id
    if(evt.target.innerText != ''){
        return;

    }
    if(turn == 1){
        displayText.innerHTML = 'X'
    }
    else{
        turn = -1;
        displayText.innerHTML = 'O'
    }
    
    colors[squareClicked] = evt.target.innerHTML;
   findWins();
    whosTurn();
    
 }
function whosTurn() {

    if(turn == 1){
return turn = -1
    }
   
    else if (turn == -1){
        return turn = 1
    }
}

function findWins(){
    wins.forEach(function(el, idx){
        console.log(el)
        console.log(colors)
    if(
        // colors[el[0]] &&
        colors[el[0]] === colors[el[1]] &&
        colors[el[0]] === colors[el[2]]
    ){
        win = colors[el[0]];
        results.innerHTML = `${win} has won`;
        console.log(win)
    } 
    else if (
        colors[el[0]] != colors[el[1]] &&
        colors[el[0]] != colors[el[2]] &&
        !colors.includes(null)
    ){
        results.innerHTML = `it's a tie`;
    }
 } )}

 function resetGame(){
square.forEach((el) => (el.innerText = ' '))
turn = 1;
win = null;
results.innerText = `New Game`
 }




