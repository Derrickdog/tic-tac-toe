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
    };

    const getBox = (index) => {
        if(index > board.length) return;
        return board[index];
    };

    const reset = () => {
        for(let i = 0; i < board.length; i++){
            board[i] = "";
        }
    };

    return {setBox, getBox, reset, board};
})();

//displayController module
const displayController = (() => {
    const boxes = document.querySelectorAll(".box");
    const statusMsg = document.getElementById("statusMsg");
    const resetBtn = document.getElementById("resetBtn");

    boxes.forEach((box) => box.addEventListener("click", (e) => {
            gameController.playRound(parseInt(e.target.id.charAt(3))-1);
            updateBoard();
        })
    );
    
    resetBtn.addEventListener("click", () => {
        gameBoard.reset;
        updateBoard();
        setStatusMsg("X Turn");
    });

    const updateBoard = () => {
        for(let i = 0; i < boxes.length; i++){
            boxes[i].textContent = gameBoard.board[i];
        }
    }

    const setStatusMsg = (message) => {
        statusMsg.textContent = message;
    };

    return {setStatusMsg};
})();

//gameController module
const gameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");
    let round = 1;

    const playRound = (index) => {
        gameBoard.setBox(index, getCurrentTurn());
        checkWin();
    };

    const getCurrentTurn = () => {
        return round % 2 === 1 ? playerX.getTurn() : playerO.getTurn();
    }

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
            const cell1 = gameBoard.getBox(winCondition[0]);
            const cell2 = gameBoard.getBox(winCondition[1]);
            const cell3 = gameBoard.getBox(winCondition[2]);

            if(cell1 === "" || cell2 === "" || cell3 === "") continue;
            if(cell1 === cell2 && cell2 === cell3){
                gameWon = true;
                break;
            }
        }

        if(gameWon){
            displayController.setStatusMsg("X Wins!");
            round = 1;
        }
        else if(!gameBoard.board.includes("")){
            displayController.setStatusMsg("Draw!");
            round = 1;
        }
        else{
            round++;
            displayController.setStatusMsg(getCurrentTurn() + " Turn");
        }
    };

    return { playRound, getCurrentTurn };
})();