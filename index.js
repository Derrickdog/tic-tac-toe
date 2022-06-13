const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("click", changeBox));

function changeBox(e){
    e.target.textContent = "X";
}
