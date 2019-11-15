
//创建各个元素
function createBanner() {
    var banner = document.createElement("div");
    banner.setAttribute("class", 'banner');
    document.body.appendChild(banner);
}
//导航栏
function createNavigationBar() {
    //标题
    var navbarTitle = document.createElement("div");
    navbarTitle.innerHTML = "极乐世界Fortune-Space&nbsp&nbsp资料站";
    navbarTitle.setAttribute("style","float:left")
    navbarTitle.style.color = "white";
    navbarTitle.style.display = "inline";
    navbarTitle.style.fontSize = "18px";
    navbarTitle.style.fontWeight = 'bold';
    navbarTitle.style.padding = '10px';
    
    //故事板按钮
    var button = document.createElement("button");
    button.setAttribute("class", 'button button-primary button-rounded');
    button.setAttribute("id", 'button_storyboard');
    button.innerHTML = "故事板";

    //世界观按钮
    var button_World = document.createElement("button");
    button_World.setAttribute("class", 'button button-primary button-rounded');
    button_World.setAttribute("id", 'button_World');
    button_World.innerHTML = "世界观";

    //地图生成按钮
    var button_MapGenerator = document.createElement("button");
    button_MapGenerator.setAttribute("class", 'button button-primary button-rounded');
    button_MapGenerator.setAttribute("id", 'button_MapGenerator');
    button_MapGenerator.innerHTML = "地图生成";

    //物品数据按钮
    var button_ItemData = document.createElement("button");
    button_ItemData.setAttribute("class", 'button button-primary button-rounded');
    button_ItemData.setAttribute("id", 'button_ItemData');
    button_ItemData.innerHTML = "物品数据";

    //更多按钮
    var button_More = document.createElement("button");
    button_More.setAttribute("class", 'button button-primary button-rounded');
    button_More.setAttribute("id", 'button_More');
    button_More.innerHTML = "更多";

    //导航栏
    var navbar = document.createElement("div");
    navbar.setAttribute("class", 'navbar');

    var block = document.createElement("div");
    block.setAttribute("class", 'Navigation_Block');
    block.setAttribute('id', 'Navigation_Block');

    //加入到hierarchy
    navbar.appendChild(navbarTitle);
    navbar.appendChild(button);
    navbar.appendChild(button_World);
    //navbar.appendChild(button_MapGenerator);
    navbar.appendChild(button_ItemData);
    navbar.appendChild(button_More);

    block.appendChild(navbar);
    document.body.appendChild(block);
}
//脚部
function createFootage() {

    var footage = document.createElement("div");
    footage.setAttribute("class", 'footage');

    var box = document.createElement("div");
    box.innerHTML = "友情链接：www.zhbit.top <br/>送给大家的话:<br/>团队Credit:</br>";

    footage.appendChild(box);
    document.body.appendChild(footage);

}
//隐藏故事板
function ClearBoard(id) {
    id = id || "none";
    board = document.getElementById(id);
    if (board != null) {
        document.body.removeChild(board);
    }

}


//物品数据菜单列表
function CreateItemContainter() {

}
//事件点击案例
function IfNaviButtonClick(my_id, my_event) {
    this.button = document.getElementById(my_id) || null;
    this.button.onclick = function () {
        //事件名称
        if (my_event === "StoryBoard") {

            //清除
            ClearBoard("SkillCardblock");
            ClearBoard("weaponCardblock");
            ClearBoard("CoreCardblock");
            ClearBoard("wtypeCardblock");

            ClearBoard("WorldViewBoard");

            //显示
            DisplayStoryBoard();
        } else if (my_event === "World") {
            //清除
            ClearBoard("StoryBoard");
            //物品数据集
            ClearBoard("SkillCardblock");
            ClearBoard("weaponCardblock");
            ClearBoard("CoreCardblock");
            ClearBoard("wtypeCardblock");

            //显示
            DisplayWorldViewBoard();
        } else if (my_event === "MapGenerator") {

        } else if (my_event === "ItemData") {
            //清除
            ClearBoard("StoryBoard");
            ClearBoard("WorldViewBoard");


            //创建
            SkillCard.Displayblock();
            CoreCard.Displayblock();
            weaponCard.Displayblock();
            weaponTypeCard.Displayblock();

            IfListCardBtnClick("Core" + "CardTitle_btn", "ShowCoreCard");
            IfListCardBtnClick("weapon" + "CardTitle_btn", "ShowWeaponCard");
            IfListCardBtnClick("Skill" + "CardTitle_btn", "ShowSkillCard");
            IfListCardBtnClick("wtype" + "CardTitle_btn", "ShowWtypeCard");

        } else if (my_event === "More") {

        }


    }
}
function IfListCardBtnClick(my_id, my_event) {
    this.button = document.getElementById(my_id) || 'null';
    this.button.onclick = function () {
        //物品数据内的导航
        if (my_event === "ShowSkillCard") {
            if (document.getElementById("Skill" + "content").style.height != "0px") {
                SkillCard.HidCard();
            } else {
                SkillCard.DisplayCard();
            }
        } else if (my_event === "ShowCoreCard") {
            if (document.getElementById("Core" + "content").style.height != "0px") {
                CoreCard.HidCard();
            } else {
                CoreCard.DisplayCard();
            }
        } else if (my_event === "ShowWeaponCard") {
            if (document.getElementById("weapon" + "content").style.height != "0px") {
                weaponCard.HidCard();
            } else {
                weaponCard.DisplayCard();
            }
        } else if (my_event === "ShowWtypeCard") {
            if (document.getElementById("wtype" + "content").style.height != "0px") {
                weaponTypeCard.HidCard();
            } else {
                weaponTypeCard.DisplayCard();
            }
        }
    }
}