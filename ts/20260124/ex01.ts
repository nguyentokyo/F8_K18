// console.log("Hello World");
//
// let a : number = 10;
//
// console.log(a);

//
//
// let a = 10;
//
// // let b : string;
//
// a = String(a);
//
//
// console.log(b); // "10"


interface Person {
    id : number,
    name : string
}

const person : Person = {
    id : 1,
    name : "huong"    // ok
    //name : 111      //--> loi
}

console.log(person);

interface Employee {
    id : number,
    name : string,
    salary : number
}

const Employees: Employee[] = [
    {id : 1, name : "huong", salary : 10000000},
    {id : 2, name : "tran", salary : 20000000}
]

console.log(Employees);



//
// interface Person01 {
//     id : number,
//     name : string
// }
//
// interface age extends Person01 {
//     age : number
// }
//
// interface Person02 extends age {
//     address : string
// }
//
// const person02 : Person02 = {
//     id : 1,
//     name : "huong",
//     age : 20,
//     address : "ha noi"
// }


interface Person01 {
    id : number,
    name : string
}

interface age {
    age : number
}

interface Person02 extends Person01, age {
    address : string
}

const person02 : Person02 = {
    id : 1,
    name : "huong",
    age : 20,
    address : "ha noi"
}


console.log(person02);




