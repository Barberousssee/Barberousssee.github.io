/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `C'est une partie nule!` : win ? `${win} a gagné!` : `C'est le tour du joueur ${turn}!`;
    };

init();


/*-----------------*/
const leBody = document.getElementById('leBody');
const leCarre = document.querySelectorAll('.square');
const bas = document.getElementById('bas');
const monNom = document.getElementById('monNom');
let numeroDeTheme = 0;

function changerTheme(){
    numeroDeTheme++
    if(numeroDeTheme == 4){
        numeroDeTheme = 0;
    }

    leBody.classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[0].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[1].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[2].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[3].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[4].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[5].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[6].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[7].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    leCarre[8].classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    monNom.classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");
    bas.classList.remove("themeUn", "themeDeux","themeTrois", "themeQuatre");


    if(numeroDeTheme == 0){
        leBody.classList.add("themeUn");
        leCarre[0].classList.add("themeUn");
        leCarre[1].classList.add("themeUn");
        leCarre[2].classList.add("themeUn");
        leCarre[3].classList.add("themeUn");
        leCarre[4].classList.add("themeUn");
        leCarre[5].classList.add("themeUn");
        leCarre[6].classList.add("themeUn");
        leCarre[7].classList.add("themeUn");
        leCarre[8].classList.add("themeUn");
        monNom.classList.add("themeUn");
        bas.classList.add("themeUn");
        }

    else if(numeroDeTheme == 1){
    leBody.classList.add("themeDeux");
    leCarre[0].classList.add("themeDeux");
    leCarre[1].classList.add("themeDeux");
    leCarre[2].classList.add("themeDeux");
    leCarre[3].classList.add("themeDeux");
    leCarre[4].classList.add("themeDeux");
    leCarre[5].classList.add("themeDeux");
    leCarre[6].classList.add("themeDeux");
    leCarre[7].classList.add("themeDeux");
    leCarre[8].classList.add("themeDeux");
    monNom.classList.add("themeDeux");
    bas.classList.add("themeDeux");
    }

    else if(numeroDeTheme == 2){
        leBody.classList.add("themeTrois");
        leCarre[0].classList.add("themeTrois");
        leCarre[1].classList.add("themeTrois");
        leCarre[2].classList.add("themeTrois");
        leCarre[3].classList.add("themeTrois");
        leCarre[4].classList.add("themeTrois");
        leCarre[5].classList.add("themeTrois");
        leCarre[6].classList.add("themeTrois");
        leCarre[7].classList.add("themeTrois");
        leCarre[8].classList.add("themeTrois");
        monNom.classList.add("themeTrois");
        bas.classList.add("themeTrois");
        }

    else{
        leBody.classList.add("themeQuatre");
        leCarre[0].classList.add("themeQuatre");
        leCarre[1].classList.add("themeQuatre");
        leCarre[2].classList.add("themeQuatre");
        leCarre[3].classList.add("themeQuatre");
        leCarre[4].classList.add("themeQuatre");
        leCarre[5].classList.add("themeQuatre");
        leCarre[6].classList.add("themeQuatre");
        leCarre[7].classList.add("themeQuatre");
        leCarre[8].classList.add("themeQuatre");
        monNom.classList.add("themeQuatre");
        bas.classList.add("themeQuatre");
        }

        

}
