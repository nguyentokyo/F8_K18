// let i = 0;
// console.log(i++);

//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// for (let i = 0; i < 5; ++i) {
//     console.log(i);
// }

// const numbers = [9, 7, 2, 6, 5];
//
// console.log(numbers[4]);
//
// // đếm phần tử
//
// console.log('độ dài của chuỗi : ' , numbers.length);
//
// console.log('phần tử cuối cùng : ' ,numbers.length - 1);

const numbers = [4, 3, 1, 5, 1];
const copyNumbers = numbers;

copyNumbers[0] = 100

console.log(copyNumbers)
console.log(numbers)


const studentA = {
    name: 'Nguyen',
    age: 20,
    score: [90, 10, 100]
}

console.log(studentA.name)
console.log(studentA.score[2])


