//函数this在回调中的问题 一般使用显示申明和this直接传入进去
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
    type: string
    onClickBad = (e: Event) => {
        this.type = e.type
        console.log(this.type)
    }
}

let h = new Handler()
let uiElement: UIElement = {
    addClickListener(onclick: (this: void, e: Event) => void) {
    }
}
uiElement.addClickListener(h.onClickBad)