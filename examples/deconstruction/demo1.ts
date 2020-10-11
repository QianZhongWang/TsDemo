//解构

// let input = [1, 2];
// let [first, second] = input

//2
let input: [number, number] = [1, 2]

function f([first, second]: [number, number]) {
    console.log(first)
    console.log(second)
}

f(input)

//3
let [first, ...rest] = [1, 23, 3, 4, 5]
console.log(first)
console.log(rest)