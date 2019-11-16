//创建头部
createNavigationBar();
createBanner();


CreateStoryBoard();
CreateWorldViewBoard();
CreateMetViewBoard();

ClearBoard("SkillCardContainter");
ClearBoard("StoryBoard");
ClearBoard("WorldViewBoard");
ClearBoard("CoreCardContainter");
ClearBoard("met_Block");

IfNaviButtonClick("button_storyboard","StoryBoard");
IfNaviButtonClick("button_World","World");
//IfNaviButtonClick("button_MapGenerator","MapGenerator");
IfNaviButtonClick("button_ItemData","ItemData");
IfNaviButtonClick("button_More","More");
IfNaviButtonClick('dropdown_cell_0','more_dropdown_0');

//createFootage();