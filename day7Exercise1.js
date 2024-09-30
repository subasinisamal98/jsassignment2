//Q.1
function fullName(){
    console.log("Subasini Samal")
}
fullName()

//Q.2
function fullName1(firstName,LastName){
    console.log(firstName + " " + LastName)
}
fullName1("Subasini","Samal")

//Q.3
function add(a,b){
    let sum = a + b
    return sum 
}
let value = add(20,40)
console.log(value)

//Q.4
function areaOfRectangle(length,width){
    let area = length * width
    return area
}
let area = areaOfRectangle(10,15)
console.log(area)

//Q.5
function perimeterOfRectangle(length,width){
    let perimeter= 2*(length + width)
    return perimeter
}
let perimeter = perimeterOfRectangle(10,15)
console.log(perimeter)

//Q.6
function volumeOfRectPrism(length,width,height){
    let volume = length * width * height
    return volume
}
let volume = volumeOfRectPrism(10,15,20)
console.log(volume)

//Q.7
function areaOfCircle(r){
    let pi = Math.PI
    let area1 = pi * r * r
    return area1
}
let area1 = areaOfCircle(10)
console.log(area1)

//Q.8
function circumOfCircle(r){
    let pi = Math.PI
    let circumference = 2*pi*r
    return circumference
}
let circumference = circumOfCircle(10)
console.log(circumference)

//Q.9
function densityOfSubstance(mass,volume){
    let density= mass/volume
    return density
}
let density = densityOfSubstance(80,20)
console.log(density)

//Q.10
function calculatingSpeed(distance,time){
    let speed = distance/time
    return speed
}
let speed = calculatingSpeed(20,10)
console.log(speed)

//Q.11
function calculateWeight(mass,gravity){
    let weight = mass*gravity
    return weight
}
let weight = calculateWeight(20,10)
console.log(weight)

//Q.12
function convertCelsiusToFahrenheit(celsius){
    let Fahrenheit = (celsius * 9/5) + 32
    return Fahrenheit
}
let Fahrenheit = convertCelsiusToFahrenheit(77)
console.log(Fahrenheit)

//Q.13
function calculateBMI(weight, height) {
  let bmi = weight / (height * height)
  if (bmi < 18.5) {
    console.log("Underweight")
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight")
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight")
  } else {
    console.log("Obese")
  }
}
calculateBMI(60, 1.74)

//Q.14
function checkSeason(month) {
    if (month === "september" || month === "october" || month === "november") {
        console.log("The season is Autumn")
    } else if (month === "december" || month === "january" || month === "february") {
        console.log("The season is Winter");
    } else if (month === "march" || month === "april" || month === "may") {
        console.log("The season is Spring");
    } else if (month === "june" || month === "july" || month === "august") {
        console.log("The season is Summer");
    } else {
        console.log("Invalid month entered.")
    }
}
checkSeason("april")

//Q.15
function findMax(a,b,c){
    let max = a
    if (b > max){
        max = b
    } else if (c > max) {
        max = c
    } else{
        max = a
    }
    console.log(max)
}
findMax( 10,55,20)
