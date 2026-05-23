const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 3 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

/**
 * y tuong
 * Bước 1 : tính tổng số lượng của mỗi sản phẩm trong bảng order
 * Bước 2 : tinh tính tổng doanh thu của 1 sản phẩm
 *          └công thức Tổng Doanh thu = số lượng sản phẩn bán * giá tiền 1 sản phẩm
 * Bước 3 : tìm ra số tiền lớn nhất.
 */

const quantityMap = {};

// chay tu 1 -> 3
for (let i = 0; i < orders.length; i++) {
    const items = orders[i].items;

    //chay tu 1 -> 2
    for (let j = 0; j < items.length; j++) {
        const productId = items[j].productId;
        const quantity = items[j].quantity;

        // console.log(productId, quantity);
        if (quantityMap[productId]) {
            quantityMap[productId] = quantityMap[productId] + quantity;
        } else {
            quantityMap[productId] = quantity;
        }
    //
    }
}

console.log('quantity :',quantityMap);
//
// const productQuantityMap = {};
// //
// for (const product of products) {
//     productQuantityMap[product.id] = product.price;
// }
//

console.log('products :', products);
//
// console.log(products[0].price * quantityMap[1]);
// console.log(products[1].price * quantityMap[2]);
// console.log(products[2].price * quantityMap[3]);
// console.log(products[3].price * quantityMap[4]);

const totalMap = {}

for (const key in quantityMap) {
    // console.log('values', quantityMap[key]);

    console.log('key', key ,typeof key , '--' ,'values', quantityMap[key], typeof quantityMap[key])

    const productId = Number(key);

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            // console.log(products[i].price * quantityMap[key]);
            totalMap[productId] = products[i].price * quantityMap[key];
        }
    }
}

console.log('totalMap :', totalMap);

function getMaxNumber(arr) {
    if (!(Array.isArray(arr))) {
        return 'ko phai mang';
    }
    if (arr.length === 0) {
        return 'ko co so lieu'
    }

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxNumber(Object.values(totalMap)))