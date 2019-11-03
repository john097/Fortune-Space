
//创建各个元素
function createBanner(){
    var banner = document.createElement("div");
    banner.setAttribute("class", 'banner');
    document.body.appendChild(banner);
}
//导航栏
function createNavigationBar(){

    //按钮
    var button = document.createElement("button");

    button.setAttribute("class", 'button button-inverse button-pill');
    
    button.setAttribute("id", 'button_storyboard');
    button.innerHTML = "故事板";
    //导航栏
    var navbar = document.createElement("div");
    navbar.setAttribute("class", 'navbar');

    var block = document.createElement("div");
    block.setAttribute("class", 'Navigation_Block');
    block.setAttribute('id','Navigation_Block');

    //加入到hierarchy
    navbar.appendChild(button);
    block.appendChild(navbar);
    document.body.appendChild(block);
}
//脚部
function createFootage(){
    var footage = document.createElement("div");
    footage.setAttribute("class", 'footage');
    document.body.appendChild(footage);
}
//隐藏故事板
function DisappearStoryBoard(){
    storyboard = document.getElementById("StoryBoard");
    if(storyboard.style.display!="none"){
        storyboard.style.display="none";
    }else if (storyboard.style.display!="flex") {
        storyboard.style.display="flex";
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