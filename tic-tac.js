let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let newcol = document.querySelector("newcol");

let turnO = true;

const winnerPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,1,0],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    if(turnO){
        box.innerText = "O";
        box.classList.add("newcol");
        turnO = false;
    }else{
        box.innerText = "X";
        box.classList.remove("newcol");
        turnO = true;
    }
    box.disabled = true;

    checkWinner();

    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation a Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

 const checkWinner = () =>{
 for(let pattern of winnerPatterns){

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    
        if(pos1Val === pos2Val && pos2Val === pos3Val){

            showWinner(pos1Val);
            disableBoxes();
        }
    }
 }
 };

 newBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);