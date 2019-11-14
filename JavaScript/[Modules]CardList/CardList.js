function CardList(id) {

    this.id = id || null

    this.block = document.createElement("div")
    this.content = document.createElement("div")
    this.container = document.createElement("div")

    this.block.setAttribute("id", this.id + "Cardblock")
    this.content.setAttribute("id", this.id + "content")
    this.content.setAttribute("class", "CardContent")
    this.container.setAttribute("class", "CardContainer")
    
    
    this.block.appendChild(this.container)

    //创建标题
    this.Title = function (title) {
        this.title = title || null
        this.title_bar = document.createElement("div")
        this.title_bar.setAttribute("class", "titleBar titlefont titlebtn")
        this.title_bar.setAttribute("id", this.id + "CardTitle_btn")
        this.title_bar.innerHTML = this.title
        this.container.appendChild(this.title_bar)
    }
    //
    this.Card = function (title, str_0, str_1, id) {
        this.title = title || null
        this.str_0 = str_0 || null
        this.str_1 = str_1 || null
        this.id = id || null

        this.mycardblock = document.createElement("div")
        this.mycardblock.setAttribute("id", this.id + "Card_" + this.id)
        this.mycardblock.setAttribute("class", "ListCardBlock")
        //
        this.mycard = document.createElement("div")
        this.mycard.setAttribute("class", 'ListCard')
        this.mycard.innerHTML = this.title
        //
        this.insideCard = document.createElement("div")
        this.insideCard.innerHTML = this.str_1
        this.insideCard.setAttribute("class", "ListCardInside")
        //
        this.titleBar = document.createElement("div")
        this.titleBar.setAttribute("class", "ListCardTile")
        this.titleBar.innerHTML = this.str_0

        this.mycardblock.appendChild(this.mycard)
        this.mycardblock.appendChild(this.titleBar)
        this.mycardblock.appendChild(this.insideCard)

        this.content.appendChild(this.mycardblock);
    }
    this.Displayblock = function () {
        document.body.appendChild(this.block)
        
    }
    this.DisplayCard = function () {
        this.content.style.height = "500px"
        this.content.style.height = "fit-content"
    }
    this.HidCard = function () {
        this.content.style.height = "0px"
    }
    this.InitCardList = function (db, filter) {
        this.filter = filter || null
        for (const iterator of db) {
            if (this.filter) {
                break
            }
            ary = []
            for (const key in iterator) {
                if (iterator.hasOwnProperty(key)) {
                    const element = iterator[key]
                    ary.push(element)
                }
            }
            this.Card(ary[0], ary[1], ary[2], db.indexOf(iterator))
        }
        this.container.appendChild(this.content)
    }
    this.ClearCardList = function () {
        this.content.innerHTML = null
    }
    this.PopCard = function () {

    }
    this.EncreasCard = function () {

    }

}
