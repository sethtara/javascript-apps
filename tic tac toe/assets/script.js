const cells= document.querySelectorAll(".cell");
const statusText=document.querySelector("#status");
const resbtn= document.querySelector("#rsBtn");

const winCond=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let options=["","","","","","","","",""];
let currentPlayer="x";
let running=false;
initGame();

function initGame(){
    cells.forEach(cell=>cell.addEventListener('click',cellClicked));
    resbtn.addEventListener('click',restart);
    statusText.textContent=`${currentPlayer}'s turn`;
    running=true;
}

function cellClicked(){
    const cellindex = this.getAttribute('cellindex');
    if(options[cellindex]!=""||!running){
        return;
    }
    updateCell(this,cellindex);
    checkWin();


}

function updateCell(cell,index){
    options[index]=currentPlayer;
    cell.textContent=currentPlayer;
}

function changePlayer(){
    currentPlayer=(currentPlayer=="x")? "o":"x";
    statusText.textContent=`${currentPlayer}'s turn`;

}

function checkWin(){
    let Won=false;
    
    for(let i =0;i<winCond.length;i++){
        if(options[winCond[i][0]]==""||options[winCond[i][0]]==""||options[winCond[i][0]]==""){
            continue;
        }
        if(options[winCond[i][0]]==options[winCond[i][1]]&&options[winCond[i][1]]==options[winCond[i][2]]){
            Won=true;
            break;
        }
    }
    if(Won){
        statusText.textContent=`🎉 ${currentPlayer} won!`;
        running=false;
    }
    else if(!options.includes("")){
        statusText.textContent=`💪 Draw`;
    }
    else{
        changePlayer();
    }

}

function restart(){
    currentPlayer='x';
    for(i=0;i<options.length;i++){
        options[i]="";
    }
    cells.forEach(cell=>cell.textContent="");
    initGame();

}