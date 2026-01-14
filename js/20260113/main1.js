// const studensts = [
//     {id: 1, name: "john" },
//     {id: 2, name: "jane" }
// ]
//
// for (let student of studensts) {
//     // console.log(student)
//
//     student.name = "replace"
// }
//
// console.log(studensts)

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

const findById = (arr , id ) => {
    for (const item of arr) {
        if (item.id === id) {
            return item
        }
    }
}

// console.log(findById(persons,5))


const findCompanyByPersonId = (persons, companies, personsId) => {
    // const person = findById(persons, personsId)
    // const { companyId } = person
    //
    // const company = findById(companies, companyId)
    //
    // return company ? company.name : null

    const companyId = findById(persons, personsId).companyId

    if (!companyId) {
        return null
    }

    for (const company of companies) {
        if (company.id === companyId) {
            return company.name
        }
    }
}

console.log(findCompanyByPersonId(persons,companies, 4))