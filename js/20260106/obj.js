function getName() {
    return this.firstName + ' ' + this.lastName
}

const huong= {
    firstName: 'huong',
    lastName: 'tran',
    age: 20,
    gender: 'male',
    address: 'Jakarta',
    getName: function () {
        return this.firstName + ' ' + this.lastName
    },
    girlFriend: {
        firstName: 'Dong',
        lastName: 'Vu',
        age: 20,
        address: 'Jakarta',
        getName
    }
}

console.log(huong.getName())
console.log(huong.girlFriend.getName())
