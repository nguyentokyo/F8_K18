

// vong lap thuc hien 1 cong viec nao do

// for (start, end, next {
// do something
// }

// let i = 0
//
// for (i = 0; i > 3; i++) {
//     console.log('anh em')
// }

let i = 0
const numbers = [1, 2, 5, 3, 3,4]

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

console.log("----------bai2---------")
for (i = 0; i < numbers.length; i++) {
    sochan = numbers[i] % 2 === 0
    if (sochan) {
        console.log(numbers[i])
    }
}

console.log("----------bai3---------")
let y = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        y = y + numbers[i];
    }
}

console.log(y);

console.log("----------lesson4---------")
let maxNumber = numbers[0];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log(maxNumber);

console.log("----------lesson5---------")
let minNumber = numbers[0];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}

console.log(minNumber);

console.log("----------lesson6---------")

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

console.log(getMaxNumber(numbers));

//
console.log("----------lesson7---------")
// const arrayNumbers = [2,9,10,1]
//
// for (let j = 0; j < arrayNumbers.length - 1; j++) {
//     for (i = 0; i < arrayNumbers.length - 1; i++) {
//         if (arrayNumbers[i] > numbers[i + 1]) {
//
//             const temp = arrayNumbers[i]
//             arrayNumbers[i] = arrayNumbers[i + 1];
//             arrayNumbers[i + 1] = temp;
//         }
//     }
// }
//
// console.log(arrayNumbers);


const arrayNumbers = [2, 9, 10, 1];

for (let j = 0; j < arrayNumbers.length - 1; j++) {
    for (let i = 0; i < arrayNumbers.length - 1; i++) {
        // Sửa 'numbers' thành 'arrayNumbers'
        if (arrayNumbers[i] > arrayNumbers[i + 1]) {
            const temp = arrayNumbers[i];
            arrayNumbers[i] = arrayNumbers[i + 1];
            arrayNumbers[i + 1] = temp;
        }
    }
}

console.log(arrayNumbers); // Kết quả: [1, 2, 9, 10]




console.log("----------lesson8---------")
const sortedNumbers = [1,2,3,4,5,6,11,12]

let index = 0;

for (i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] === 11) {
        index = i;
    }
}

console.log(index);

console.log("----------lesson9---------")
const arayNumbers = [1, 2, 3, 4, 5, 11, 12, 13];

let counter = 0;

for (let j = 0; j < arayNumbers.length - 1; j++) {
    if (arayNumbers[j] < 11) {
        console.log(arayNumbers[j]);
    } else {
        break
    }
    counter ++
}

console.log('counter',counter);


console.log("----------lesson10---------")
const arayNumbers2 = [1, 2, 3, 4, 5, 11, 12, 13];

let counter2 = 0;

for (const i of arayNumbers2) {
    if (i < 11) {
        console.log(i);
    } else {
        break
    }

    counter2 ++
}

console.log('counter',counter2);

























