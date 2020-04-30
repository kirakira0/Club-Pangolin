export function grabRandomX() {
    let randomInt = Math.floor(Math.random() * 3)
    switch (randomInt) {
        case 0:
            return 800
        case 1:
            return 1300
        case 2:
            return 1100
        default:
            console.log(randomInt)
    }
}