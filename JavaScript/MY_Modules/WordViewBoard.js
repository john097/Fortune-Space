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




//temp metting 
var met_content = document.createElement("div");
var met_Block = document.createElement("div");

met_Block.setAttribute("id","met_Block");

met_content.setAttribute("class","WorldViewContent");

function CreateMetViewBoard(){
    met_content.innerHTML = meeting_db[0].content;
}
met_Block.appendChild(met_content);

function DisplayMetViewBoard(){
    document.body.appendChild(met_Block);
}
