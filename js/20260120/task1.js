

const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 18000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

const MAX_PRICE = 20000
const MAX_REMAINING = 10

// tim tat ca san pham co gia tri duoc lon hon MAX_PRICE
const names = products.filter(p =>
    {
       return p.price >= MAX_PRICE
    }
)
console.log(names.map(p => p.name))

// tim gia tri duy nhat trong mang

const arr = (id) => {
    for (const product of products) {
        if (product.id === id) return product
    }
}

console.log(arr(2))

const findProduct = (products, productId) => products.find(p => p.id === productId)
console.log(findProduct(products, 2))

