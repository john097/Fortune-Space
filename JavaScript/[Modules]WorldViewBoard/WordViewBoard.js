var worldContainter = document.createElement("div");
var worldBlock = document.createElement("div");

worldBlock.setAttribute("id","WorldViewBoard");
worldContainter.setAttribute("class","WorldViewContent");

function CreateWorldViewBoard(){
    worldContainter.innerHTML = WorldViewBoard_Db;
}
worldBlock.appendChild(worldContainter);


function DisplayWorldViewBoard(){
    document.body.appendChild(worldBlock);
}