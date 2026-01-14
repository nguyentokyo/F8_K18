

// let name = "John";
//
// // console.log(name[0] = "z");
// // console.log(name[0]);
//
// name = "zohn";
//
// console.log(name);



 // câu lệnh điều kiện switch
// let ages = 20;
//
// switch (true) {
//     case ages < 20:
//         console.log("bạn chưa đủ 20");
//         break;
//     case ages = 20:
//         console.log("bạn đã đủ 20");
//         break;
//     default:
//         console.log('trường hợp khác')
//         break;
// }

// Toán tử 3 ngôi
//
// let tuoi = 20;
// let loai;
// if (tuoi >= 18) {
//     loai = "Người lớn";
// } else {
//     loai = "Trẻ vị thành niên";
// }
// console.log(loai); // Output: Người lớn
//
// let tuoi = 20;
// let loai = (tuoi >= 18) ? "Người lớn" : "Trẻ vị thành niên";
// console.log(loai); // Output: Người lớn

let height = 165 / 100;
let weight = 90;
let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Gầy")
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Bình thường")
} else {
    console.log("Thừa cân")
}


const number = 9;

if (number % 2 === 0) {
    console.log("Số chẵn");
} else {
    console.log("Số lẻ");
}

const age = 61;

switch (true) {
    case age < 12:
        console.log("trẻ em")
        break;
    case age >= 12 && age < 25:
        console.log("Thanh niên")
        break;
    case age >= 25 && age < 60:
        console.log("Trưởng thành")
        break;
    default:
        console.log("Người già")
}


let year = 2025
console.log((year =year + 1) - 1)
console.log(year)


// Hàm
// 1. Hàm khai báo
// function sum() {
//     //Khối lệnh
//     sum = 1 + 2;
//     console.log(sum);
// }
//
// sum()

// 2. Hàm biểu thức
// a, b gọi là tham số
// 1 , 4 gọi là đối số
// sau return bị bỏ qua hết
// const sum = function(a, b) {
//     //Khối lệnh
//    return a + b;
//
//    console.log('sau return');
// }
//
// console.log(sum(1,4))

// 3 Hàm mũi tên
// khác cái 2 kia là ko có tên Function,  thay băằng dấu ->
const sum = (a, b) => {
    return a + b;
}

// 4 IIFE
// chạy luôn lập tức
(function hello() {
    console.log("hello");
})(3);

// 5 Hàm vô danh
// không có tên dùng khi đặt trong 1 cái iife
(function () {
    console.log("Hello World1");
})();


// 6 callback hàm
// hàm được như 1 tham số trong hàm khác
// - là hàm
// - được truyền vào như 1 tham số trong hàm khác

function sums(a, b) {
    return (a + b);
}

function caculator(callback) {
    console.log(callback(1, 2));
}

caculator(sums);










