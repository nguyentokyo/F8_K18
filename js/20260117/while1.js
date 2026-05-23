// const numbers = [1, 2, 3, 4, 5];
//
// let i = 0;
//
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i ++;
// }


const a = [1, 4, 9, 6]
const b = [2, 3, 4, 5, 8]

/*
* merge a and b to sortedNumbers
* ex sortedNumbers = [1, 2, 3, 4, 4, 5, 6, 8, 9]
* */

const sortedNumbers = []

// for (let i = 0; i < a.length; i++) {
//     sortedNumbers.push(a[i])
// }
//
// for (let i = 0; i < b.length; i++) {
//     sortedNumbers.push(b[i])
// }
//
// for (let i in a) {
//     sortedNumbers.push(a[i])
// }
//
// for (let j in b) {
//     sortedNumbers.push(b[j])
// }

// console.log(sortedNumbers)


//
// let i = 0;
// let j = 0;
//
//
// while (i < a.length && j < b.length) {
//     if (a[i] < b[j]) {
//         sortedNumbers.push(a[i])
//         i ++;
//     } else {
//         sortedNumbers.push(b[j])
//         j ++;
//     }
// }
//
// console.log(sortedNumbers)


// const sortedNumbers = []

let i = 0
let j = 0
let count = 0

for (let k = 0; k < a.length + b.length; k++) {
    if (i >= a.length) {
        sortedNumbers.push(b[j++])
    } else if (j >= b.length) {
        sortedNumbers.push(a[i++])
    } else if (a[i] < b[j]) {
        sortedNumbers.push(a[i++])
    } else {
        sortedNumbers.push(b[j++])
    }
    count ++
}

console.log(sortedNumbers)




