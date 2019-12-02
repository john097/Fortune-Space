//文档型生成

//临时-世界观的文档
var worldview_doc = new viewBoardDoc('WorldView')
worldview_doc.create('FortuneDatabase/worldViewBoard_doc_db.txt')

//-会议文档
var meeting_doc = new viewBoardDoc('met_doc')
meeting_doc.create('FortuneDatabase/meeting_01_doc_db.txt')

//角色属性文档
var chrinspect_doc = new viewBoardDoc('chrins')
chrinspect_doc.create('FortuneDatabase/chr_doc_db.txt')
//-芯片文档
var chip_doc = new viewBoardDoc('chip_doc');
chip_doc.create('FortuneDatabase/chip_doc_db.txt')
//战斗策划文档
var fight_doc = new viewBoardDoc('fight_doc')
fight_doc.create('FortuneDatabase/fight_doc_db.txt')
//技能文档
var skill_doc = new viewBoardDoc('skill_doc')
skill_doc.create('FortuneDatabase/skill_doc_db.txt')


//!----------------------------------------------

//看板文档通用格式
function viewBoardDoc(id) {

    this.id = id || null

    this.content = document.createElement("div")
    this.block = document.createElement("div")

    this.block.setAttribute("id", this.id+"_Block")
    this.block.setAttribute("class", "ViewBoardBlock")
    this.content.setAttribute("class", "ViewBoardContent")

    this.create = function (url) {
        this.url = url||null
        loadXMLDoc(this.url, this.content)
    }
    this.block.appendChild(this.content)

    this.display = function () {
        document.body.appendChild(this.block)
    }

}

//通用的加载文件函数ajax

function loadXMLDoc(url, Xcontent) {
    let xmlhttp;
    xmlhttp = null;

    if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
    else {
        alert("Your browser does not support XMLHTTP.");
    }

    function state_Change() {
        if (xmlhttp.readyState == 4) {// 4 = "loaded"
            if (xmlhttp.status == 200) {// 200 = "OK"
                Xcontent.innerHTML = xmlhttp.responseText;
            }
            else {
                alert("Problem retrieving data:" + xmlhttp.statusText);
            }
        }
    }

}
