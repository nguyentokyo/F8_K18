
// lap trinh huong doi tuong OOP
// Mo hinh hoa cac thanh phan trong 1 ung dung
//
//
// */
interface AnimalI {
    id: number
    name: string
    going: () => void
    speaking: () => void
}

class Animal implements AnimalI {
    id: number
    name: string
    going() {
        console.log('going')
    }
    speaking() {
        console.log('speaking')
    }
}

// const dog = new Animal()
// dog.id = 1
// dog.name = 'dog'
//
// dog.speaking()
// dog.going()

class Dog extends Animal {
    speaking() {
        console.log('dog speaking')
    }

    bark() {
        console.log('bark')
    }
}

class Cat extends Animal {
    meow() {
        console.log('meow')
    }
}

const animals: AnimalI[] = []

const dog = new Dog()

dog.id = 1
dog.name = 'shiba'
dog.speaking()
dog.going()
dog.bark()
animals.push(dog)

const cat = new Cat()

cat.id = 2
cat.name = 'cat'
cat.speaking()
cat.going()
cat.meow()
animals.push(cat)

console.log(animals)






