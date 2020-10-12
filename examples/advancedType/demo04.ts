//联合类型，类型保护
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
// 类型谓词
// function isFish(pet:Bird|Fish):pet is Fish {
//     return (pet as Fish).swim !== undefined
// }
// let pet = getSmallPet()
// if(isFish(pet)){
//     pet.swim()
// }else {
//     pet.fly()
// }