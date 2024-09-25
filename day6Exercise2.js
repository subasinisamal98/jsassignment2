//Q.1
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';
let n=6
for (let i = 0; i < n; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length); 
  randomID = randomID + characters[randomIndex]; 
}
console.log(randomID);

//Q.2
let hexacharacter = '0123456789abcdef';
let hexa = '#';
let n1=6
for (let i = 0; i < n1; i++) {
  let randomIndex = Math.floor(Math.random() * hexacharacter.length); 
  hexa = hexa + hexacharacter[randomIndex]; 
}
console.log(hexa);

//Q.3
let rgb = '';
for (let i = 0; i < 3; i++) {
  let randomColor = Math.floor(Math.random() * 255);  
  rgb = rgb + randomColor;
  if (i < 2) {
    rgb = rgb + ','; 
  }
}
console.log("rgb","(",rgb,")");

//Q.4
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let uppercase = []
for (let i = 0; i < countries.length; i++) {
  uppercase.push(countries[i].toUpperCase())
}
console.log(uppercase)

//Q.5
let countrylength = []
for (let i = 0; i < countries.length; i++) {
  countrylength.push(countries[i].length)
}
console.log(countrylength)

//Q.6
let country = []
for (let i = 0; i < countries.length; i++) {
  let countryname = countries[i]
  let countryslice = countryname.slice(0, 3).toUpperCase()
  let countryLength = countryname.length
  country.push([countryname, countryslice, countryLength])
}
console.log(country)

//Q.7
let countryLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    countryLand.push(countries[i])
  }else{
    console.log('All these countries are without land')
  }
}
  console.log(countryLand)

//Q.8
let countryend = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith('ia')) {
    countryend.push(countries[i])
  }else{
    console.log('these countries are end without ia')
  }
}
  console.log(countryend)

//Q.9
let longestCountry = ''
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i]
  }
}
console.log(longestCountry)

//Q.10
let country5Chars = []
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    country5Chars.push(countries[i])
  }
}
console.log(country5Chars)

//Q.11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let longestword = ''
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestword.length) {
    longestword = webTechs[i]
  }
}
console.log(longestword)

//Q.12
let webtech = []
for (let i = 0; i < webTechs.length; i++) {
  webtech.push([webTechs[i], webTechs[i].length])
}
console.log(webtech)

//Q.13
const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronym = ''
for (let i = 0; i < mernStack.length; i++) {
  acronym = acronym + mernStack[i][0]
}
console.log(acronym)

//Q.14
const array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let arr of array) {
  console.log(arr);
}

//Q.15
let fruit = ['banana', 'orange', 'mango', 'lemon'] 
for (let i = fruit.length-1; i>=0; i--){
  console.log(fruit[i]);
}

//Q.16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (let i = 0; i < fullStack.length;i++){
  for (let j = 0; j < fullStack[i].length; j++) {
  console.log(fullStack[i][j])
  }
}




