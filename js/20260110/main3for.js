// 1. Cấp độ Cơ bản (Làm quen cú pháp)
// Những bài này giúp bạn hiểu cách điều khiển biến chạy và điều kiện dừng
//     .Bài 1: In ra các số từ 1 đến 100.
// Bài 2: In ra các số chẵn trong khoảng từ 1 đến $n$ ($n$ nhập từ bàn phím)
// .Bài 3: Tính tổng các số từ 1 đến $n$.Công thức: $S = 1 + 2 + 3 + ... + n$
// Bài 4: In bảng cửu chương của một số $x$ bất kỳ.

//lesson 1
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }
//

//lesson 2
// function getEvenNumber(n) {
//     if (typeof n !== 'number' || isNaN(n)) {
//         return 'day khong phai so'
//     }
//
//     if (n < 0) {
//         return 'day khong duong'
//     }
//
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
//
// console.log(getEvenNumber(10))

// lesson 3
// function getSumNumber(n) {
//     if (typeof n !== 'number' || isNaN(n)) {
//         return 'day khong phai so'
//     }
//
//     if (n < 0) {
//         return 'day khong duong'
//     }
//
//     let sum = 0;
//
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//
//     return sum
// }
//
// console.log(getSumNumber(5))

//lesson 4
// function getMultiplication(n) {
//     if (typeof n !== 'number' || isNaN(n)) {
//         return 'day khong phai so'
//     }
//
//     if (n < 0) {
//         return 'day khong duong'
//     }
//
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} * ${i}`, 'out put' ,i * n)
//     }
//
// }
//
// getMultiplication(2)
