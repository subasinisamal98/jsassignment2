//Q.1
const arr = [1, 2, 3];
arr.forEach((element) => {
  console.log(element)
})

const arr1 = [1, 2, 3];
const doubled = arr1.map((x) => x * 2);
console.log(doubled);

const arr2 = [1, 2, 3, 4];
const evens = arr2.filter((x) => x % 2 === 0);
console.log(evens);

const arr3 = [1, 2, 3, 4]
const sum = arr3.reduce((a , b) => {
    return a + b
})
console.log(sum)

//Q.2
function double(num) {
  return num * 2;
}

let arr4 = [1, 2, 3,4]

arr4.forEach(function (num) {
  console.log(double(num))
});

let doubledArr = arr4.map(double)
console.log(doubledArr)

function isEven(num) {
  return num % 2 === 0;
}
let evenNumbers = arr4.filter(isEven)
console.log(evenNumbers)

function sumofarray(acc, curr) {
  return acc + curr
}
let totalSum = arr4.reduce(sumofarray, 0)
console.log(totalSum)

//Q.3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(function(country){
  console.log(country)
})

//Q,4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(function(name){
  console.log(name)
})

//Q.5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(function(number){
  console.log(number)
})

//Q.6
let touppercase = countries.map((country) => country.toUpperCase())
console.log(touppercase)

//Q.7
let findlength = countries.map((country) => country.length)
console.log(findlength)

//Q.8
let square = numbers.map((num) => num * num)
console.log(square)

//Q.9
let uppercase = names.map((name) => name.toUpperCase())
console.log(uppercase)

//Q.10
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
let price = products.map((product) => product.price)
console.log(price)

//Q.11
let containLand = countries.filter((country) => country.includes('land'))
console.log(containLand)

//Q.12
let contain6char = countries.filter((country) => country.length === 6)
console.log(contain6char)

//Q.13
let contain6charormore = countries.filter((country) => country.length >= 6)
console.log(contain6charormore)

//Q.14
let startwithE = countries.filter((country) => country.startsWith('E'))
console.log(startwithE)

//Q.15
let price1 = products.map((product) => product.price)
console.log(price1)

//Q.16
const Array = [1, 'hello', 55, 'Reema', 42, 'JavaScript']
function getStringLists(arr) {
  return arr.filter((Array) => typeof Array === 'string')
}
console.log(getStringLists(Array))

//Q.17
const sumall = numbers.reduce((a , b) => {
    return a + b
})
console.log(sumall)

//Q.18
const sentence = countries.reduce(function(acc, country, index, array) {
  if (index === array.length - 1) {
    return `${acc}, and ${country} are north European countries`
  } else {
    return `${acc}, ${country}`
  }
})
console.log(sentence)

//Q.19
let number = [1,2,3,4,5,6]
let evennum = number.some((num) => num % 2 === 0)
console.log(evennum)

let num = [2,4,6]
let evennumbers = num.every((n) => n % 2 === 0)
console.log(evennumbers)

//Q.20
let checklength = names.some((name) => name.length > 7)
console.log(checklength)

//Q.21
let checkland = countries.every((country) => country.includes('land'))
console.log(checkland)

//Q.22
let firstEvenNumber = number.find((num) => num % 2 === 0)
console.log(firstEvenNumber)

let firstEvenindexNumber = number.findIndex((num) => num % 2 === 0)
console.log(firstEvenindexNumber)

//Q.23
let checklength1 = countries.find((country) => country.length === 6)
console.log(checklength1)
//Q.24
let checklength2 = countries.findIndex((country) => country.length === 6)
console.log(checklength2)

//Q.25
let indexvalue = countries.findIndex((country) => country === 'Norway')
console.log(indexvalue)

//Q.26
let indexvalue1 = countries.findIndex((country) => country === 'Russia')
console.log(indexvalue1)