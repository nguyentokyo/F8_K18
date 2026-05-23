// interface Employee {
//     id : number,
//     name : string,
//     salary : number,
//     active : boolean
// }
//
// const employees : Employee[]  = [
//     {id : 1, name : "huong", salary : 10000000, active : true},
//     {id : 2, name : "tran", salary : 20000000, active : false},
//     {id : 3, name : "tran", salary : 20000000, active : true},
// ]
//
// // filter active in employees
// //console.log(employees.filter(emp => emp.active));
//
// // for (let emp of employees) {
// //     if (emp.active) {
// //         console.log(emp)
// //     }
// // }
//
// // const activeEmployees: Employee[] = employees.filter(e => e.active)
// // console.log(activeEmployees)
//
//
// let activeEmployee: Employee[] = employees.find(e => e.id === 1);
//
// console.log(activeEmployee);

// interface Employee {
//     id: number
//     name: string
//     salary: number
//     active: boolean
// }
//
// const employees: Employee[] = [
//     { id: 1, name: "A", salary: 10000000, active: true },
//     { id: 2, name: "B", salary: 20000000, active: false },
//     { id: 3, name: "C", salary: 20000000, active: true },
// ]
//
// // const activeEmployee: Employee[] = employees.find(e => e.id === 1)
// // @ts-ignore
// const activeEmployee: Employee | undefined = employees.find((e: { id: number }) => e.id === 1);
//
// console.log(activeEmployee)

