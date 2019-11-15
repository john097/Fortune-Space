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
    titleBar.setAttribute("class", "titleBarStory");
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
        //createCard(iterator.story, "ID:"+iterator.id+";"+iterator.title);
        createCard(iterator.story, iterator.title);
    }
}
function DisplayStoryBoard(){
    document.body.appendChild(containerblock);
}

//技能卡
var SkillCard = new CardList("Skill");
SkillCard.Title('&nbsp;&nbsp;技能资料库');
SkillCard.InitCardList(Skill_db);
SkillCard.content.style.height = "0px";
//第二技能卡

//芯片卡
var CoreCard = new CardList("Core");
CoreCard.Title('&nbsp;&nbsp;芯片资料库');
CoreCard.InitCardList(CoreCard_db_1);
CoreCard.content.style.height = "0px";

//武器卡
var weaponCard = new CardList("weapon");

weaponCard.Card = function(str,id){
    this.id = id||0
    this.cardblock = document.createElement('div')
    this.cardblock.setAttribute('id',weaponCard.id+'Card_'+this.id)
    this.cardblock.setAttribute('class','ListCardBlock WeaponCardGridLayout')
    for (const iterator of str) {
        this.card = document.createElement("div")
        //this.card.setAttribute('id',weaponCard.id+"Card_"+this.id)
        this.card.setAttribute('class','ListCard')
        this.card.innerHTML = iterator
        this.cardblock.appendChild(this.card)
    }
    weaponCard.content.appendChild(this.cardblock)
}
weaponCard.InitCardList = function(db,filter){
    this.filter = filter || null
    for (const iterator of db) {
        if (this.filter) {
            break
        }
        this.ary = []
        for (const key in iterator) {
            if (iterator.hasOwnProperty(key)) {
                const element = iterator[key]
                this.ary.push(element)
            }
        }
        this.Card(this.ary, db.indexOf(iterator))
    }
    this.container.appendChild(this.content)
}
weaponCard.Title('&nbsp;&nbsp;武器资料库');
weaponCard.InitCardList(WeaponCard_db);
weaponCard.content.style.height = "0px";


//武器卡解释
var weaponTypeCard = new CardList('wtype');

weaponTypeCard.Card = function(str,id){
    this.id = id||0
    this.cardblock = document.createElement('div')
    this.cardblock.setAttribute('id',weaponTypeCard.id+'Card_'+this.id)
    this.cardblock.setAttribute('class','ListCardBlock wtypeCardGridLayout')
    for (const iterator of str) {
        this.card = document.createElement("div")
        //this.card.setAttribute('id',weaponCard.id+"Card_"+this.id)
        this.card.setAttribute('class','ListCardTile')
        this.card.innerHTML = iterator
        this.cardblock.appendChild(this.card)
    }
    weaponTypeCard.content.appendChild(this.cardblock)
}
weaponTypeCard.InitCardList = function(db,filter){
    this.filter = filter || null
    for (const iterator of db) {
        if (this.filter) {
            break
        }
        this.ary = []
        for (const key in iterator) {
            if (iterator.hasOwnProperty(key)) {
                const element = iterator[key]
                this.ary.push(element)
            }
        }
        this.Card(this.ary, db.indexOf(iterator))
    }
    this.container.appendChild(this.content)
}

weaponTypeCard.Title('&nbsp;&nbsp;武器配件资料库');
weaponTypeCard.InitCardList(weaponType_db);
weaponTypeCard.content.style.height = "0px";