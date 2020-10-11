//接口继承类
class Control {
    private state:any
}
interface SelectableControl extends Control{
    select()
}
//按钮继承control然后实现selectableControl
class Button extends Control implements SelectableControl{
    select() {
    }
}
class TexBox extends Control{
    select() {

    }
}

/*
* 会报错，类去实现SelectableControl
* 因为接口去继承类的时候，会去继承类的私有成员
* */

// class ImageControl implements SelectableControl{
//     select() {
//     }
// }
