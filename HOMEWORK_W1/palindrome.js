function isPalindrome (string) {
    string = string.toLowerCase()
    let strLen = string.length;
    let half = Math.round(strLen/2)
    let lower = string.slice(0, half)
    console.log(`Lower: ${lower}`)
    if (strLen % 2 == 0) {
        let upper = string.slice(half)
        let upperReversed = upper.split('').reverse().join('')
        console.log(`Upper: ${upperReversed}`)
        if (lower === upperReversed) {
            return true
        }
        return false
    } else {
        let upper = string.slice(half-1)
        let upperReversed = upper.split('').reverse().join('')
        console.log(`Upper: ${upperReversed}`)
        if (lower === upperReversed) {
            return true
        }
        return false
    }
}

console.log(isPalindrome("Racecar"))
console.log(isPalindrome("deified"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("radar"))
console.log(isPalindrome("uwu"))