

interface SquareConfig {
    color?: string;
    width?: number;
    //添加索引签名
    [propName:string]:any
}
interface Square {
    color: string
    area: number
}

function createSquare (config: SquareConfig): Square {
    let newSquare = {color: 'white', area: 100}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}


let mySquare = createSquare({ colour: 'red', width: 100 })