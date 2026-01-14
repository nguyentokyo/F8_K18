// let i = 0
// let arr = [2, 9, 20, 10, 1, 7 , 9];
// let count = 0
//
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//
//         let temp = arr[i];
//
//         arr[i] = arr[i + 1];
//
//         arr[i + 1] = temp;
//
//         i = -1;
//
//     }
//     count ++
// }
//
// console.log(arr , 'so lan lap', count);

let arr = [2, 9, 10, 1, 7, 9];

function quickSortDirect(array, low, high) {
    if (low < high) {
        // 1. Phân đoạn để tìm vị trí chốt đúng
        let pivotIndex = partition(array, low, high);

        // 2. Sắp xếp đệ quy hai bên của chốt
        quickSortDirect(array, low, pivotIndex - 1); // Bên trái
        quickSortDirect(array, pivotIndex + 1, high); // Bên phải
    }
}

function partition(array, low, high) {
    let pivot = array[high]; // Chọn phần tử cuối làm chốt
    let i = low - 1; // Chỉ số của phần tử nhỏ hơn

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            // Hoán đổi trực tiếp
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // Đưa chốt về đúng vị trí giữa hai nhóm
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1; // Trả về vị trí của chốt
}

quickSortDirect(arr, 0, arr.length - 1);
console.log("Mảng sau khi xếp trực tiếp:", arr);