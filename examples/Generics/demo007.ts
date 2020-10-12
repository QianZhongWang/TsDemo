//泛型约束
// function create<T>(c: { new(): T }): T {
//     return new c()
// }

class BeeKeeper {
    hasMask: boolean
}

class LoinKeeper {
    nameTag: string
}

class Animal {
    numLength: number
}

class Bee extends Animal {
    keeper: BeeKeeper
}

class Loin extends Animal {
    keeper: LoinKeeper
}

function createInstance<T extends Animal>(c: new() => T): T {
    return new c()
}
createInstance(Loin).keeper
createInstance(Bee).keeper