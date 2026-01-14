
function giaiPTBac2(a, b, c) {
    if (a === 0) {
        console.log("K phải PT bậc 2")
        return
    }

    let delta = b * b - 4 * a * c

    if (delta < 0) {
        console.log("vô nghiệm")
    } else if (delta === 0) {
        let nghiemKep = -b / (2 * a)
        console.log("có nghiệm kép là ", nghiemKep)
    } else {
        let canDelta = delta ** 0.5;
        let x1 = (-b + canDelta) / (2 * a)
        let x2 = (-b - canDelta) / (2 * a)
        console.log("x1 =", x1)
        console.log("x2 =", x2)
    }
}

giaiPTBac2(0,5,1)
giaiPTBac2(2,2,1)
giaiPTBac2(1,2,1)
giaiPTBac2(6,5,1)

