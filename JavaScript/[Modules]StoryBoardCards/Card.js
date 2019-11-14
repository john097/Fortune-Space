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
    
    for (const iterator of story_db) {
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
//大盒子
var SkillCardContainter = document.createElement("div");
SkillCardContainter.setAttribute("class","SkillCardContainter");
//标题
var SkillCardContainerTitle = document.createElement("div");
SkillCardContainerTitle.setAttribute("class","titleBar titlefont titlebtn");
SkillCardContainerTitle.setAttribute("id","SkillCardTitle_btn");

SkillCardContainerTitle.innerHTML = '&nbsp;&nbsp;技能资料库';
//套娃
var SkillCardContent = document.createElement("div");
SkillCardContent.setAttribute("id","SkillCardContent");

SkillCardContainter.appendChild(SkillCardContainerTitle);
SkillCardContainter.appendChild(SkillCardContent);
SkillCardContainterblock.appendChild(SkillCardContainter);

function CreateSkillCard(str,str2,str3,id){
    str = str || "none";
    str2 = str2 || "none";
    str3 = str3 || "none";
    id = id || "0";
    
    this.mycardblock = document.createElement("div");
    this.mycardblock.setAttribute("id","skillcard_"+id);
    this.mycardblock.setAttribute("class","SkillcardBlock");
    //
    this.mycard = document.createElement("div");
    this.mycard.setAttribute("class", 'Skillcard');
    this.mycard.innerHTML = str;
    //
    this.insideCard = document.createElement("div");
    this.insideCard.innerHTML = str3;
    this.insideCard.setAttribute("class", "SkillCardInside");
    //
    this.titleBar = document.createElement("div");
    this.titleBar.setAttribute("class", "SkillCardTitleBar");
    this.titleBar.innerHTML = str2;

    this.mycardblock.appendChild(mycard);
    this.mycardblock.appendChild(titleBar);
    this.mycardblock.appendChild(insideCard);

    SkillCardContent.appendChild(mycardblock);
}
//生成技能卡
function IntializeSkillCardBoard() {
    
    for (const iterator of Skill_db) {
        //if (Math.random() > 0.5);
        CreateSkillCard(iterator.name, iterator.distance,iterator.discribe,Skill_db.indexOf(iterator));
    }

}
//显示技能卡的大框架
function DisplaySkillCardBoard(){
    document.body.appendChild(SkillCardContainterblock);
    IfNaviButtonClick("SkillCardTitle_btn","ShowSkillCard");
}
//显示技能卡的小框架
function DisplaySkillCardContent(){
    console.log("s");
    SkillCardContent.setAttribute("style","height:auto");
}



//芯片卡

var CoreCardContanerBlock = document.createElement("div");
CoreCardContanerBlock.setAttribute("id","CoreCardContainter");

var CoreCardContainer = document.createElement("div");
CoreCardContainer.setAttribute("class","CoreCardContainter");

var CoreCardContanerTitle = document.createElement("div");
CoreCardContanerTitle.setAttribute("class","titleBar titlefont titlebtn");
SkillCardContainerTitle.setAttribute("id","CoreCardTitle_btn");
CoreCardContanerTitle.innerHTML = '&nbsp;&nbsp;芯片资料库';
//套娃
var CoreCardContent = document.createElement("div");
CoreCardContent.setAttribute("id","CoreCardContent");

CoreCardContainer.appendChild(CoreCardContanerTitle);
CoreCardContainer.appendChild(CoreCardContent);
CoreCardContanerBlock.appendChild(CoreCardContainer);
//创建芯片卡
function CreateCoreCard(str,str2,str3,id){
    str = str || "none";
    str2 = str2 || "none";
    str3 = str3 || "none";
    id = id || "0";
    
    this.mycardblock = document.createElement("div");
    this.mycardblock.setAttribute("id","CoreCard_"+id);
    this.mycardblock.setAttribute("class","SkillcardBlock");
    //
    this.mycard = document.createElement("div");
    this.mycard.setAttribute("class", 'Skillcard');
    this.mycard.innerHTML = str;
    //
    this.insideCard = document.createElement("div");
    this.insideCard.innerHTML = str3;
    this.insideCard.setAttribute("class", "SkillCardInside");
    //
    this.titleBar = document.createElement("div");
    this.titleBar.setAttribute("class", "SkillCardTitleBar");
    this.titleBar.innerHTML = str2;

    this.mycardblock.appendChild(mycard);
    this.mycardblock.appendChild(titleBar);
    this.mycardblock.appendChild(insideCard);
    CoreCardContent.appendChild(mycardblock);
}
//生成技能卡
function IntializeCoreCardBoard() {
    
    for (const iterator of CoreCard_db) {
        //if (Math.random() > 0.5);
        CreateCoreCard(iterator.name, iterator.mode ,iterator.effect,CoreCard_db.indexOf(iterator));
    }

}
//显示芯片卡
function DisplayCoreCardBoard(){
    document.body.appendChild(CoreCardContanerBlock);
    IfNaviButtonClick("CoreCardTitle_btn","ShowCoreCard");
}
//显示技能卡的小框架
function DisplayCoreCardContent(){
    CoreCardContainer.setAttribute("style","height:auto");
}
function HideCoreCardContent(){
    CoreCardContainer.setAttribute("style","height:0");
}
