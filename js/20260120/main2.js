// const numbers = [1, 2, 3,10,9,7,5,3];
//
// // const callback = (number, index) => {
// //     console.log(number);
// //     console.log(index);
// // }
//
// numbers.forEach((number, index) => console.log(number, index))
//

// indexOf
const numbers2 = [1, 2, 3,10,9,7,5,3,10];
// const index = numbers2.indexOf(10)


// ⇒ dung check phan tu trong mang
// so do ko co trong mang no tra ve -1
// neu co nhieu phan tu trung voi nhau thi tra ve index cua phan tu dau tien
const index = numbers2.indexOf(10, 5)



console.log(index)

// includes
// const numbers3 = [1, 2, 3,10,9,7,5,3];
// const check = numbers3.includes(10)

// find

// filter

// map
const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 }
]

console.log(products.map(id => id.name))






