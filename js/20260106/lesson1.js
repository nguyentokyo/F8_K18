// Bài 1 – Kiểm tra số
//
// Viết chương trình nhận vào số n:
//
//     Nếu n > 0 → in "Số dương"
//
// Nếu n < 0 → in "Số âm"
//
// Nếu n === 0 → in "Số 0"


const getNumber = (numebr) => {
    if (typeof numebr !== 'number') {
        return 'day khong phai so'
    }
    else if (numebr === 0) {
        return 0
    }
    else if (numebr > 0) {
        return 'day la so duong'
    }
    else {
        return 'day la so am'
    }
}

console.log(getNumber(-10))