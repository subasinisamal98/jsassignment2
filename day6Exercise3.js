//Q.1
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
const countriesCopy = countries.slice()
console.log(countriesCopy)

//Q.2
const countryCopy = countries.slice()
console.log(countryCopy)
const sortCountry = countries.sort()
console.log(sortCountry)

//Q.3
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
const sortwebTechs = webTechs.sort()
console.log(sortwebTechs)
const sortmernstack = mernStack.sort()
console.log(sortmernstack)

//Q.4
let countryLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    countryLand.push(countries[i])
  }
}
console.log(countryLand)
//OR filter
const countriesWithLand = countries.filter(country => country.includes('land'))
console.log(countriesWithLand)

//Q.5
let longestCountry = ''
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i]
  }
}
console.log(longestCountry)

//Q.6
let countrywithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes('land')) {
    countrywithLand.push(countries[i])
  }
}
console.log(countrywithLand)

//Q.7
let country4Chars = []
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 4) {
    country4Chars.push(countries[i])
  }
}
console.log(country4Chars)

//Q.8
let country2word = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].split(' ').length >= 2) {
    country2word.push(countries[i])
  }
}
console.log(country2word)

//Q.9
let reverse=[]
for (let i = countries.length-1; i>=0; i--){
  reverse.push(countries[i].toUpperCase())
}
console.log(reverse)