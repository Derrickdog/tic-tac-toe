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