//使用类型谓词改写padLeft函数
function isNumber(x: any): x is number {
    return typeof x === "number"
}

function isString(x: any): x is string {
    return typeof x === 'string'
}

function padLeft(value: string, padding: number | string) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value
    }
    if (isString(padding)) {
        return padding + value
    }
    throw new Error(`Excepted string or number,got ${padding}`)
}
//typeof 类型保护
function padLeft1(value: string, padding: number | string) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Excepted string or number,got ${padding}`)
}