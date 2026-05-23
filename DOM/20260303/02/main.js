// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         let success = false;
//
//         if (success) {
//             resolve("Thành công!");
//         } else {
//             reject("Thất bại!");
//         }
//     });
// };
//
// fetchData()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log("Error:", error);
    });