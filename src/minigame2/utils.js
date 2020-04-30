export function grabRandomColumn() {
    let randomInt = Math.floor(Math.random() * 3)
    switch (randomInt) {
        case 0:
            return 100
        case 1:
            return 380
        case 2:
            return 660
        default:
            console.log(randomInt)
    }
}
export function grabRandomHeight() {
    let randomInt = Math.floor(Math.random() * 3)
    switch (randomInt) {
        case 0:
            return 800
        case 1:
            return 1200
        case 2:
            return 1000
        default:
            console.log(randomInt)
    }
}