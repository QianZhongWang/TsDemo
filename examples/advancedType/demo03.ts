//联合类型只能访问共有部分
interface Bird {
    fly()
    layEggs()
}
interface Fish{
    swim()
    layEggs()
}

// function getSmallPet():Bird|Fish {
//
// }
// let pet =getSmallPet()
// pet.layEggs()
// pet.fly()