//Q.1
import countries from './countries.js';
import webtech from './webtech.js';


console.log('Countries:', countries);
console.log('webtech:', webtech);

//Q.2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '').split(/\s+/);
console.log(words)
console.log(words.length)

//Q.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart[2] = 'Green Tea'
if (!shoppingCart.includes('Meat','sugar')) {
    shoppingCart.unshift('Meat');
    shoppingCart.push('sugar');

}
let honeyIndex = shoppingCart.indexOf('Honey');
    shoppingCart.splice(honeyIndex, 1);

console.log(shoppingCart)

//Q.4
const countries1 = [
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

if (countries1.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries1.push('Ethiopia');
}

//Q.5
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
if (webTechs.includes('Sass')) {
    console.log('Sass is a css preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs)
}
//Q.6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)