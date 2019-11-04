//创建故事板
//
var container = document.createElement("div");
container.setAttribute("class","container");
container.setAttribute("id","StoryBoard");
//创建卡牌
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
    document.body.appendChild(container);
}
//随机生成
function randomizeStoryText() {
    
    for (const iterator of story) {
        //if (Math.random() > 0.5);
        createCard(iterator.story, "ID:"+iterator.id+";"+iterator.title);
    }

}
