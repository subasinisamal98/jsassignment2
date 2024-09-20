//Q.1
let age = Number(prompt("Enter your age:"));
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}

//Q.2
const myage = 25;  
let yourage = Number(prompt("Enter your age:"));
if (yourage > myage) {
  let difference = yourage - myage;
  console.log(`You are ${difference} years older than me.`);
} else if (yourage < myage) {
  let difference = myage - yourage;
  console.log(`I am ${difference} years older than you.`);
} else {
  console.log("We are the same age!");
}

//Q.3
let a =4
let b = 3
if (a>b){
    console.log("a is greater than b.")
}else{
    console.log("b greater than a.")
}

console.log((a > b)
 ? "a is greater than b"
 : "b is greater than a")

//Q.4
let num = Number(prompt("Enter a number"))
if(num % 2 === 0){
    console.log(`${num} is an even Number.`)
} else{
    console.log(`${num} is an odd Number.`)
}



