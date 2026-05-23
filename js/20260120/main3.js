/*
* book taxi
*
* 41 tran duy hung -> dai hoc back khoa
*
* click "ok"
*
* -> find some drivers (nearest and free)
* */


const user = {
    id: 1,
    name: 'Tran Xuan Banh',
    long: 105.8213,
    lat: 21.2296
}

const getDistance = (long1, lat1, long2, lat2) => {
    let long = long1 - long2
    let lat = lat1 - lat2
    return (long ** 2 + lat ** 2) ** 0.5
}

const findNearestDriver = (curLong, curLat) => {
    const drivers= [
        { id: 1, name: "Nguyen Van A", long: 105.8342, lat: 21.0278, isFree: true },
        { id: 2, name: "Tran Van B", long: 105.8411, lat: 21.0302, isFree: false },
        { id: 3, name: "Le Van C", long: 105.8295, lat: 21.0251, isFree: true },
        { id: 4, name: "Pham Van D", long: 105.8456, lat: 21.0328, isFree: true },
        { id: 5, name: "Hoang Van E", long: 105.8203, lat: 21.0199, isFree: true }
    ]

    const arrDrivers = drivers.filter(driver => driver.isFree)

    if (!arrDrivers) return "No"

    // arrDrivers.sort((a, b) => getDistance(curLong, curLat, a.long, a.lat) - getDistance(curLong, curLat, b.long, b.lat))
    // console.log(arrDrivers[0])

    let nearestDriver = null
    let minDistance = null

    arrDrivers.forEach(driver => {
        const distance = getDistance(curLong, curLat, driver.long, driver.lat)

        // console.log(distance)

        if (!minDistance|| distance < minDistance) {
            minDistance = distance
        }
    })
    return minDistance


}

console.log(findNearestDriver(user.long, user.lat))



//
// let long1 = 10.88
// let lat1 = 20.15
//
// let long2 = 15.88
// let lat2 = 10.15
//
//
//
// let long = long1 - long2
// let lat = lat1 - lat2
//
// let x = long < 0 ? -long : long
// let y = lat < 0 ? -lat : lat
//
//
// let abs = (x * 111 + y * 111)
//
// console.log(abs)