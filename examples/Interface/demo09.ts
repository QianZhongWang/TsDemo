//类类型的接口

//实例接口
interface ClockInterface {
    currentTime: Date
    setTime(d:Date)
}
class Clock implements  ClockInterface{
    currentTime:Date
    constructor(h:number,m:number) {
    }
    setTime(d: Date) {
        this.currentTime = d
    }
}
//构造器签名
interface ClockConstructor{
    new (hour:number,minute:number)
}
// class Clock1 implements ClockConstructor{
//     currentTime:Date
//     constructor(h:number,m:number) {
//     }
//     setTime(d: Date) {
//         this.currentTime = d
//     }
// }