const student = {
    id : 1,
    name : "huong"
}

student.address = 'ha noi'
student['age'] = 20

const key = 'custom-key'

student[key] = '1234567890'


console.log(student)
//
// delete student['custom-key']
//
// console.log(student)
//
//
// for (const item in student) {
//     console.log(item, student[item])
// }
//
//
// const keys = Object.keys(student)
// console.log(keys)
//
// const values = Object.values(student)
// console.log(values)
//
//
//
//

