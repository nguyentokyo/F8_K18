// console.log('-----luyen1')
// function demo1(callback) {
//     setTimeout(
//         function () {
//             console.log('nấu cơm đã')
//             callback()
//         }
//         , 3000)
// }
//
// function demo2() {
//     console.log('ăn cơm đi')
// }
//
// demo1(demo2)
//


const x1 = (x) => {
    console.log('day la hanh dong 1')
    return x
}

const x2 = (msg) => {
    console.log('day la hanh dong 2')
    return msg
}

console.log(x1(x2('day la hanh dong 3')))




// console.log(x2())


