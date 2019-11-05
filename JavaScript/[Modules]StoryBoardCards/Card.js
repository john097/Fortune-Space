//创建故事板
//
var containerblock = document.createElement("div");
containerblock.setAttribute("id","StoryBoard");

var container = document.createElement("div");
container.setAttribute("class","container");


containerblock.appendChild(container);
//创建故事卡牌
function createCard(str, str2) {
    str = str || "none";
    str2 = str2 || "none";
    //
    var mycard = document.createElement("div");
    mycard.setAttribute("class", 'card');
    //
    var insideCard = document.createElement("div");
    insideCard.innerHTML = str;
    insideCard.setAttribute("class", "insideCard");
    //
    var titleBar = document.createElement("div");
    titleBar.setAttribute("class", "titleBar");
    titleBar.innerHTML = str2;

    mycard.appendChild(titleBar);
    mycard.appendChild(insideCard);
    container.appendChild(mycard);
    document.body.appendChild(containerblock);
}
//随机生成故事卡
function CreateStoryBoard() {
    
    for (const iterator of story) {
        //if (Math.random() > 0.5);
        createCard(iterator.story, "ID:"+iterator.id+";"+iterator.title);
    }
}
function DisplayStoryBoard(){
    document.body.appendChild(containerblock);
}

//技能卡
//屏障
var SkillCardContainterblock = document.createElement("div");
SkillCardContainterblock.setAttribute("id","SkillCardContainter");

var SkillCardContainter = document.createElement("div");
SkillCardContainter.setAttribute("class","SkillCardContainter");

var SkillCardConttainerTitle = document.createElement("div");
SkillCardConttainerTitle.setAttribute("class","titleBar");
SkillCardConttainerTitle.setAttribute("style","font-size: 24px");
SkillCardConttainerTitle.innerHTML = '技能种类概括';
SkillCardContainter.appendChild(SkillCardConttainerTitle);

SkillCardContainterblock.appendChild(SkillCardContainter);
function CreateSkillCard(str,str2,str3,id){
    str = str || "none";
    str2 = str2 || "none";
    str3 = str3 || "none";
    id = id || "skillcard_0";
    
    var mycardblock = document.createElement("div");
    mycardblock.setAttribute("id","skillcard_"+id);
    mycardblock.setAttribute("class","SkillcardBlock");
    //
    var mycard = document.createElement("div");
    mycard.setAttribute("class", 'Skillcard');
    mycard.innerHTML = str;
    //
    var insideCard = document.createElement("div");
    insideCard.innerHTML = str3;
    insideCard.setAttribute("class", "SkillCardInside");
    //
    var titleBar = document.createElement("div");
    titleBar.setAttribute("class", "SkillCardTitleBar");
    titleBar.innerHTML = str2;

    mycardblock.appendChild(mycard);
    mycardblock.appendChild(titleBar);
    mycardblock.appendChild(insideCard);
    SkillCardContainter.appendChild(mycardblock);
    document.body.appendChild(SkillCardContainterblock);
}
//生成技能卡
function IntializeSkillCardBoard() {
    
    for (const iterator of Skill_db) {
        //if (Math.random() > 0.5);
        CreateSkillCard(iterator.name, iterator.distance,iterator.discribe,Skill_db.indexOf(iterator));
    }

}
function DisplaySkillCardBoard(){
    document.body.appendChild(SkillCardContainterblock);
}
//芯片卡
function CreateCoreCard(){

}