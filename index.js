//gameBoard module
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let running = true;
    return {board, currentPlayer, running};
})();

//displayController module
const displayController = (() => {
    const boxes = document.querySelectorAll(".box");
    const statusMsg = document.getElementById("statusMsg");
    const resetBtn = document.getElementById("resetBtn");

    boxes.forEach((box) => box.addEventListener("click", (e) => {
            const boxIndex = e.target.id.charAt(3);
            if(gameBoard.board[boxIndex] != "" || !gameBoard.running) return;
            
            gameBoard.board[boxIndex] = gameBoard.currentPlayer;
            e.target.textContent = gameBoard.currentPlayer;

            checkWinner();
        })
    );

    resetBtn.addEventListener("click", () => {
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        gameBoard.currentPlayer = "X";
        statusMsg.textContent = gameBoard.currentPlayer + " Turn";
        boxes.forEach(box => box.textContent = "");
        gameBoard.running = true;
    });

    const checkWinner = () => {
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
            statusMsg.textContent = gameBoard.currentPlayer + " Wins!";
            gameBoard.running = false;
        }
        else if(!gameBoard.board.includes("")){
            statusMsg.textContent = "Draw!";
            gameBoard.running = false;
        }
        else{
            changePlayer();
        }
    }

    const changePlayer = () => {
        gameBoard.currentPlayer = (gameBoard.currentPlayer === "X") ? "O" : "X";
        statusMsg.textContent = gameBoard.currentPlayer + " Turn";
    }
})();
