//可选参数，和默认参数
function buildName(firstName: string, laseName: string): string {
    return firstName + laseName
}
//
// let result = buildName('bob')
// let result = buildName('bob','smith','zhang')
// let result = buildName('bob','li')



/*可选参数必须在最后面*/
function buildName1(firstName:string,lastName?:string) {
    if(lastName){
        return firstName+lastName
    }else{
        return firstName
    }
}

//剩余参数
function buildName3(firstName:string,lastName:string,...restOfName:string[]):string {
    return firstName+lastName
}