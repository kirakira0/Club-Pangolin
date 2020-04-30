export function grabRandomColumn() {
    let randomInt = Math.floor(Math.random() * 3)
    switch (randomInt) {
        case 0:
            return 80
        case 1:
            return 280
        case 2:
            return 480
        default:
            console.log(randomInt)
    }
}
export function grabRandomHeight() {
    let randomInt = Math.floor(Math.random() * 3)
    switch (randomInt) {
        case 0:
            return 600
        case 1:
            return 800
        case 2:
            return 1000
        default:
            console.log(randomInt)
    }
}