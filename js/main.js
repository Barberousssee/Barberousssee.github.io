/**
 * Constantes des lignes de TicTacToe gagnants
 */
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


let board;
let turn = 'X';
let win;

const squares = Array.from(document.querySelectorAll('#board div'));

document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);

/**
 * Pour vérifier s'il y a un gagnant
 * @returns char le gagnant s'il y en a un
 */
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

/**
 * Placer le X ou le O dans le carré sélectionné
 */
function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

/**
 * Initialiser le tableau
 */
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

/**
 * Mettre les valeurs à jour avec l'action exécuté
 */
function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `C'est une partie nule!` : win ? `${win} a gagné!` : `C'est le tour du joueur ${turn}!`;
    };

init();


const leBody = document.getElementById('leBody');
const leCarre = document.querySelectorAll('.square');
const bas = document.getElementById('bas');
const monNom = document.getElementById('monNom');
const themes = ["themeUn", "themeDeux","themeTrois", "themeQuatre"]

let numeroDeTheme = 0;

/**
 * Changer le thème
 */
function changerTheme(){
    numeroDeTheme++
    if(numeroDeTheme == themes.length){
        numeroDeTheme = 0;
    }

    for(i=0;i<themes.length;i++){
        leBody.classList.remove(themes[i]);
        monNom.classList.remove(themes[i]);
        bas.classList.remove(themes[i]);

        for(j=0;j<leCarre.length;j++){
            leCarre[j].classList.remove(themes[i]);
        }
    }

    leBody.classList.add(themes[numeroDeTheme]);
    monNom.classList.add(themes[numeroDeTheme]);
    bas.classList.add(themes[numeroDeTheme]);

    for(i=0;i<leCarre.length;i++){
        leCarre[i].classList.add(themes[numeroDeTheme]);
    }
    
}