
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
    navbarTitle.setAttribute("style", "float:left")
    navbarTitle.style.color = "white";
    navbarTitle.style.display = "inline";
    navbarTitle.style.fontSize = "18px";
    navbarTitle.style.fontWeight = 'bold';
    navbarTitle.style.padding = '10px';

    //故事板按钮
    var button = document.createElement("button");
    button.setAttribute("class", 'button button-primary button-rounded');
    button.setAttribute("id", 'button_storyboard');
    button.innerHTML = "故事看板";

    //世界观按钮
    var button_World = document.createElement("button");
    button_World.setAttribute("class", 'button button-primary button-rounded');
    button_World.setAttribute("id", 'button_World');
    button_World.innerHTML = "游戏介绍";

    //物品数据按钮
    var button_ItemData = document.createElement("button");
    button_ItemData.setAttribute("class", 'button button-primary button-rounded');
    button_ItemData.setAttribute("id", 'button_ItemData');
    button_ItemData.innerHTML = "资料库";



    //更多按钮
    var button_More = document.createElement("div");
    button_More.setAttribute("id", 'button_More');
    button_More.innerHTML = "更多";

    //下拉菜单内容
    var more_dropdown = new DropDown('more')
    more_dropdown.CreateCell(0, '会议记录')
    more_dropdown.CreateCell(1, '角色属性')
    more_dropdown.CreateCell(2, '芯片文档')
    more_dropdown.CreateCell(3,'战斗策划文档')
    more_dropdown.CreateCell(4,'游戏分析')

    button_More.appendChild(more_dropdown.block)

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
function ClearAllBoard() {

    ClearBoard("SkillCardblock");
    ClearBoard("weaponCardblock");
    ClearBoard("CoreCardblock");
    ClearBoard("wtypeCardblock");

    ClearBoard('WorldView'+'_Block');

    ClearBoard('chip_doc'+'_Block');
    ClearBoard('met_doc'+'_Block')
    ClearBoard('fight_doc'+'_Block')
    ClearBoard('skill_doc'+'_Block')
    ClearBoard('chrins'+'_Block')

    ClearBoard("StoryBoard");
}

//事件点击案例
function IfNaviButtonClick(my_id, my_event) {
    this.button = document.getElementById(my_id) || null;
    this.button.onclick = function () {
        //事件名称
        if (my_event === "StoryBoard") {

            //清除
            ClearAllBoard();

            //显示
            DisplayStoryBoard();
        } else if (my_event === "World") {
            ClearAllBoard();
            //显示
            worldview_doc.display()
        } else if (my_event === "ItemData") {
            ClearAllBoard();

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
            IfMoreDropDownBtnClick('dropdown_cell_0', 'meeting_doc');
            IfMoreDropDownBtnClick('dropdown_cell_1', 'chr_doc');
            IfMoreDropDownBtnClick('dropdown_cell_2', 'chip_doc');
            IfMoreDropDownBtnClick('dropdown_cell_3', 'fitht_doc');
            IfMoreDropDownBtnClick('dropdown_cell_4', 'skill_doc');
        }
        
    }
}
function IfMoreDropDownBtnClick(my_id, my_event) {
    this.button = document.getElementById(my_id) || 'null';
    this.button.onclick = function () {
        //物品数据内的导航
        ClearAllBoard();
        if (my_event === "meeting_doc") {
            meeting_doc.display()
        }else if (my_event === "chr_doc") {
            chrinspect_doc.display()
        }else if (my_event === "chip_doc") {
            chip_doc.display()
        }else if (my_event === "skill_doc") {
            skill_doc.display()
        }else if (my_event === "fitht_doc") {
            fight_doc.display()
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