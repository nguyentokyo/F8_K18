const companies = [
    {id: 1, name: "fpt"},
    {id: 2, name: "viettel"},
    {id: 3, name: "vnpt"}
]

const persons = [
    { id: 1, name: 'Huong Tran', companyId: 3 },
    { id: 2, name: 'Dong Vu', companyId: 1 },
    { id: 3, name: 'Tien Vuong', companyId: null },
    { id: 4, name: 'Son Nguyen', companyId: 2 },
    { id: 5, name: 'Bach Hoang', companyId: 3 }
]

//newPersons = [
//     { id: 1, name: 'Huong Tran', company: "vnpt" },
//     { id: 2, name: 'Dong Vu', company: "fpt" },
//     { id: 3, name: 'Tien Vuong', company: null },
//     { id: 4, name: 'Son Nguyen', company: "viettel"  },
//     { id: 5, name: 'Bach Hoang', company: "vnpt"  }
// ]


// for (const person of persons) {
//
//     const companyId  = person.companyId
//
//
//     for (const company of companies) {
//         if (company.id === companyId) {
//             person.company = company.name
//         }
//     }
//
//
// }
//
// console.log(persons)

const companyMap = {};

// vòng lặp 1: tạo map
for (const company of companies) {
    companyMap[company.id] = company.name;
}

// vòng lặp 2: gán company cho person
for (const person of persons) {
    // console.log(person.companyId)
    console.log(companyMap[person.companyId])
    person.company = companyMap[person.companyId] ?? null;


}

console.log(persons);



