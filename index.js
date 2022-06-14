// const boxes = document.querySelectorAll(".box");
// boxes.forEach(box => box.addEventListener("click", changeBox));

// function changeBox(e){
//     e.target.textContent = "X";
// }

//player factory function
const Player = (turn) => {
    this.turn = turn;
    const getTurn = () => {
        return turn;
    }
    return {getTurn};
}

//gameBoard module
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const setBox = (index, sign) => {
        if(index > board.length) return;
        board[index] = sign;
    }

    const getBox = (index) => {
        if(index > board.length) return;
        return board[index];
    }

    const reset = () => {
        for(let box of board){
            box = "";
        }
    }

    return {setBox, getBox, reset};
})();

//gameController module
const gameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");

    const checkWin = (index) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let gameWon = false;

        for(let i = 0; i < winConditions.length; i++){
            const winCondition = winConditions[i];
            const cell1 = gameBoard.board[winCondition[0]];
            const cell2 = gameBoard.board[winCondition[1]];
            const cell3 = gameBoard.board[winCondition[2]];

            if(cell1 === "" || cell2 === "" || cell3 === "") continue;
            if(cell1 === cell2 && cell2 === cell3){
                gameWon = true;
                break;
            }
        }

        if(gameWon){
            //winner
        }
        else if(!gameBoard.includes("")){
            //draw
        }
        else{
            //change player
        }
    };
    
})();

//displayController module
const displayController = (() => {
    


})();

