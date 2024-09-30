//Q.1
function userIdGeneratedByUser(){
    let numberofChars = Number(prompt("Enter the number of characters:"))
    let numberofIds = Number(prompt("Enter the number of ids:"))
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let ids = []
    for(let i = 0; i < numberofIds; i++){
        let id = ''
        for(let j = 0; j < numberofChars; j++){
            randomid = Math.floor(Math.random()*characters.length)
            id = id + characters[randomid]
        }
        ids.push(id)
    }
    console.log(ids,"\n")
}
userIdGeneratedByUser()

//Q.2
function rgbColorGenerator(){
    let rgb = '';
    for (let i = 0; i < 3; i++) {
      let randomColor = Math.floor(Math.random() * 255);  
      rgb = rgb + randomColor;
      if (i < 2) {
        rgb = rgb + ','; 
      }
    }
    console.log("rgb","(",rgb,")");
}
rgbColorGenerator()

//Q.3
function arrayOfHexaColors(num) {
    let hexColors = []
    for (let i = 0; i < num; i++) {
        let hex = '#'
        for (let j = 0; j < 6; j++) {
            let randomHex = Math.floor(Math.random() * 16).toString(16)
            hex = hex + randomHex
        }
        hexColors.push(hex)
    }
    return hexColors
}

console.log(arrayOfHexaColors(3))

//Q.4
function arrayOfRgbColors(num) {
    const rgbColors = []
    for (let i = 0; i < num; i++) {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        rgbColors.push(`rgb(${r}, ${g}, ${b})`);
    }
    return rgbColors
}
console.log(arrayOfRgbColors(5))

//Q.5
function convertHexaToRgb(hex) {
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgb(${r}, ${g}, ${b})`
}
console.log(convertHexaToRgb('#ff5733'))

//Q.6
function rgbToHex(r,g,b){
    let r1 = r.toString(16).padStart(2,'0')
    let g1 = g.toString(16).padStart(2,'0')
    let b1 = b.toString(16).padStart(2,'0')
    console.log(`#${r1}${g1}${b1}`)
}
console.log(rgbToHex(218,85,165))
//Q.7
function generateColors(type, count) {
    function randomHexColor() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += Math.floor(Math.random() * 16).toString(16);
    }
    return hex;
  }
  function randomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  let colors = [];
  for (let i = 0; i < count; i++) {
    if (type === 'hexa') {
      colors.push(randomHexColor());
    } else if (type === 'rgb') {
      colors.push(randomRgbColor());
    }
  }
   if(count === 1){
    colors[0]
   } else{
    colors
   }
   return colors
  //return count === 1 ? colors[0] : colors
}
console.log(generateColors('hexa', 3))
console.log(generateColors('rgb', 3))

//Q.8
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    //[array[i], array[j]] = [array[j], array[i]]
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
let arr = [1, 2, 3, 4, 5]
console.log(shuffleArray(arr))

//Q.9
function factorial(n){
    let facttori = 1
    for(let i = 1;i<=n; i++){
        facttori = facttori * i
    }
    return facttori
}
console.log(factorial(10))

//Q.10
function isempty(a){
    if(a === null || a === undefined){
        console.log("is Empty")
    }
    console.log("not empty")
}
isempty(null)

//Q.11
function sum(argument){
    let sum = 0
    for(let i = 0; i <=argument.length;i++){
        sum = sum + i
    }
    console.log(sum)
}
sum(1,2,3,4,5,6,7,8,9,10)

//Q.12
function sumOfArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      console.log("Error")
    }
  }
  let sum = 0
    for(let i = 0; i <=arr.length;i++){
        sum = sum + i
    }
    console.log(sum)
}
sumOfArrayItems([1,2,3,4,5,,6,7,8,9,10])

//Q.13
function average(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      console.log("Error")
    }
    sum = sum + arr[i]
  }
  let avg = sum / arr.length;
  console.log(avg)
}
average([1,2,3,4,5,6,7])

//Q.14
function modifyArray(arr) {
    if (arr.length < 5) {
        return 'item not found';
    }
    arr[4] = arr[4].toUpperCase();
    return arr;
}
let value = modifyArray(['Reema','Apple','Cat','Dog','Leem'])
console.log(value)
let value1 = modifyArray(['Reema','Apple','Cat','Dog'])
console.log(value1)

//Q.15
function isprime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log(isprime(3))

//Q.16
function AllItemsUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false
            }
        }
    }
    return true
}
console.log(AllItemsUnique([1,2,3,4,5]))
console.log(AllItemsUnique([1,2,3,4,5,5]))

//Q.17
function areAllItemsSameType(arr) {
    const firstType = typeof arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== firstType) {
        }
    }
    return true
}
console.log(areAllItemsSameType([1, 2, 3, 4]))
console.log(areAllItemsSameType([1, '2', 3]))

//Q.18
function isValidVariable(name) {
    const firstChar = name[0];
    if (!(
            (firstChar >= 'a' && firstChar <= 'z') ||
            (firstChar >= 'A' && firstChar <= 'Z') ||
            firstChar === '$' ||
            firstChar === '_')) {
        return false
    }
    for (let i = 1; i < name.length; i++) {
        const char = name[i];
        if (!(
                (char >= 'a' && char <= 'z') ||
                (char >= 'A' && char <= 'Z') ||
                (char >= '0' && char <= '9') ||
                char === '$' ||
                char === '_')) {
            return false
        }
    }
    return true
}
console.log(isValidVariable('_myVar'))
console.log(isValidVariable('9myVar'))
//Q.19
function sevenRandomNumbers() {
    const uniqueNumbers = []
    for (let i = 0; i < 7; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber)
        }
    }
    return uniqueNumbers
}
console.log(sevenRandomNumbers())

//Q.20
function reverseCountries(countries){
    let reverse = ''
    for(let i = countries.length-1; i >= 0; i--){
        reverse = reverse + countries[i]
    }
    console.log(reverse)
}
reverseCountries(['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina'])
