//类与继承

class Animal {
    move(distance:number=0){
        console.log(`animal moved ${distance}`)
    }
}
class Dog extends Animal{
    bark(){
        console.log('汪汪汪')
    }
}
const dog = new Dog()
dog.bark()
dog.move(10)
