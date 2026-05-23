function Animal(name, action) {
    function getName() {
        // return name;
        console.log(`tên là : ${name}`);
    }

    function eat() {
        console.log(`${name} : đang ăn`);
    }

    function speak() {
        action(name);
    }

    return { getName, eat, speak };
}

const dogSpeak = (name) => {
    console.log(`${name} : sủa Gâu Gâu`);
}

const catSpeak = (name) => {
    console.log(`${name} : kêu meo meo`);
}

const dog = Animal("ShiBa", dogSpeak);
const cat = Animal("Mun", catSpeak);

dog.getName();
dog.eat();
dog.speak();
cat.speak();
