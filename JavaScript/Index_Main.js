//创建头部
createBanner();
createNavigationBar();

CreateStoryBoard();
IntializeSkillCardBoard();
ClearBoard("SkillCardContainter");
ClearBoard("StoryBoard");

IfNaviButtonClick("button_storyboard","StoryBoard");
IfNaviButtonClick("button_World","World");
IfNaviButtonClick("button_MapGenerator","MapGenerator");
IfNaviButtonClick("button_ItemData","ItemData");
IfNaviButtonClick("button_More","More");

//createFootage();