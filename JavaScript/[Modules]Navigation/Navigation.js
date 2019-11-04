
//创建各个元素
function createBanner(){
    var banner = document.createElement("div");
    banner.setAttribute("class", 'banner');
    document.body.appendChild(banner);
}
//导航栏
function createNavigationBar(){

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
    block.setAttribute('id','Navigation_Block');

    //加入到hierarchy
    navbar.appendChild(button);
    navbar.appendChild(button_World);
    navbar.appendChild(button_MapGenerator);
    navbar.appendChild(button_ItemData);
    navbar.appendChild(button_More);

    block.appendChild(navbar);
    document.body.appendChild(block);
}
//脚部
function createFootage(){

    var footage = document.createElement("div");
    footage.setAttribute("class", 'footage');
    
    var box = document.createElement("div");
    box.innerHTML = "友情链接：www.zhbit.top \n 送给大家的话：\n团队Credit:\n";

    footage.appendChild(box);
    document.body.appendChild(footage);
    
}
//隐藏故事板
function DisappearStoryBoard(){
    storyboard = document.getElementById("StoryBoard");
    if (storyboard.style.display!="flex") {
        storyboard.style.display="flex";
    }else if(storyboard.style.display!="none"){
        storyboard.style.display="none";
    }
    
}
//事件点击案例
function IfNaviButtonClick(my_id,my_event){ 
    this.button = document.getElementById(my_id);
    this.button.onclick = function(){
        //事件名称
        if (my_event==="DisappearStoryBoard") {
            DisappearStoryBoard();
        }
    }
}