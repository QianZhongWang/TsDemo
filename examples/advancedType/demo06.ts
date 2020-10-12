//instance of 的类型保护机制
class Bird {
    fly() {
        console.log('fly')
    }

    layEggs() {
        console.log('lay eggs')
    }
}

class Fish {
    swim() {
        console.log('swim')
    }

    layEggs() {
        console.log('lay eggs')
    }
}

function getRandomPet(): Fish | Bird {
    return Math.random() > 0.5 ? new Fish() : new Bird()
}
let pet = getRandomPet()
if (pet instanceof Fish){
    pet.swim()
    pet.layEggs()
}else{
    pet.fly()
    pet.layEggs()
}