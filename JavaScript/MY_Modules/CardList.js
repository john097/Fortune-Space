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

    this.Card = function (str, id, grid_style) {
        this.id_a = id || 0
        this.grid_style = grid_style || null

        this.cardblock = document.createElement('div')
        this.cardblock.setAttribute('id', this.id + 'Card_' + this.id_a)
        this.cardblock.setAttribute('class', 'ListCardBlock ' + this.grid_style)
        for (const iterator of str) {
            this.card = document.createElement("div")
            this.card.setAttribute('class', 'ListCardTile')
            this.card.innerHTML = iterator
            this.cardblock.appendChild(this.card)
        }
        this.content.appendChild(this.cardblock)
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
    this.InitCardList = function (db, grid_style, filter) {
        this.filter = filter || null
        this.grid_style = grid_style || null

        for (const iterator of db) {
            if (this.filter) {
                break
            }
            this.ary = []
            for (const key in iterator) {
                if (iterator.hasOwnProperty(key)) {
                    const element = iterator[key]
                    this.ary.push(element)
                }
            }
            this.Card(this.ary, db.indexOf(iterator), this.grid_style)
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
