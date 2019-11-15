//创建头部
createNavigationBar();
createBanner();


CreateStoryBoard();
CreateWorldViewBoard();

ClearBoard("SkillCardContainter");
ClearBoard("StoryBoard");
ClearBoard("WorldViewBoard");
ClearBoard("CoreCardContainter");

IfNaviButtonClick("button_storyboard","StoryBoard");
IfNaviButtonClick("button_World","World");
//IfNaviButtonClick("button_MapGenerator","MapGenerator");
IfNaviButtonClick("button_ItemData","ItemData");
IfNaviButtonClick("button_More","More");


//createFootage();