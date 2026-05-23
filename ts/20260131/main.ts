interface ProductI {
    getName: () => string
    getPrice: () => number
    getId: () => number
    setName: (name: string) => void
    setPrice: (price: number) => void
}

class Product implements ProductI {
    private id: number
    private name: string
    private price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    getName(): string {
        return this.name
    }
    getPrice(): number {
        return this.price
    }

    getId(): number {
        return this.id
    }

    setName(name: string) {
        this.name = name
    }
    setPrice(price: number) {
        this.price = price
    }

}

interface PhoneI extends ProductI {
    getBranch: () => string
    setBranch: (branch: string) => void
}

class Phone extends Product implements PhoneI {
    branch: string

    constructor(id: number, name: string, price: number, branch: string) {
        super(id, name, price)
        this.branch = branch
    }
    getBranch() {
        return this.branch
    }
    setBranch(branch: string) {
        this.branch = branch
    }

}

const phone5: PhoneI = new Phone(1, 'iphone5', 1000000, 'Vietnam')

console.log(phone5.getBranch())




