//下拉菜单

function DropDown(id){
    this.id = id||null
    this.block = document.createElement('div')
    this.content = document.createElement('div')

    this.block.setAttribute("id", this.id + "dropdown_block")
    this.content.setAttribute("id", this.id + "dropdown_content")

    this.block.setAttribute('class','dropdown_block')
    this.content.setAttribute('class','dropdown_content')
    
    this.block.appendChild(this.content)

    this.CreateCell = function(id,str){
        this.id_a = id||'0'
        this.str = str||'敬请期待'
        this.cell = document.createElement('div')
        this.cell.setAttribute('class', 'dropdown_Cell')
        this.cell.innerHTML = this.str
        this.cell.setAttribute("id", "dropdown_cell_"+this.id_a )

        this.content.appendChild(this.cell)
        
    }
    this.InitCells = function(count){
        for (let index = 0; index < count; index++) {
            this.CreateCell(index)
        }
    }
    this.Displayblock = function(){
        this.block.style.display='block'
    }
    this.Hidblock = function(){
        this.block.style.display='none'
    }

}