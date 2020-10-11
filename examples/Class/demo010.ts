/*
* 抽象类
* */
abstract class Animal {
    abstract makeSound(): void

    move(): void {
        console.log('moved')
    }
}
