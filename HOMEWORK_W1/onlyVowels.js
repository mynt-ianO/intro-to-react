function onlyVowelsOf(string) {
    const vowelArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    const stringToArray  = string.split('')
    const stringVowels = stringToArray.filter(char => vowelArray.includes(char))
    const vowelString = stringVowels.join('')
    return vowelString
}

console.log(onlyVowelsOf("Ian Rafael Ordonez"))
console.log(onlyVowelsOf("hello"))