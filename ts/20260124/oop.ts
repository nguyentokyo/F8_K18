
// -- tinh ke thua
// -- tinh da hinh
// -- tinh dong goi
// -- Tinh tru tuong

// dinh nghia kieu du lieu
interface Animal {
    arm: number
    lag: number
    speaking: () => string
    going: () => void

    setArm: (arm: number) => void
    setLag: (lag: number) => void
}

// triển khai
class Animals implements Animal {
    arm = 2
    lag= 4

    speaking() {
        return 'speaking'
    }

    going() {
        console.log('going')
    }

    setArm(arm: number){
        this.arm = arm
    }

    setLag(lag: number){
        this.lag = lag
    }
}

const animals = new Animals()

animals.setArm(10)
animals.setLag(8)

console.log(animals.speaking())
console.log(animals.arm) // 10
console.log(animals.lag) // 8


