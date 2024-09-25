//Q.1 
for(let i = 0; i <=10; i++){
    console.log(i)
}

let i = 0
while(i<=10){
    console.log(i)
    i++
}

let i1 = 0
do{
    console.log(i1)
    i1++
}while(i1<=10)

// Q.2
for(let xy = 10; xy >=0; xy--){
    console.log(xy)
}

let xy = 10
while(xy >= 0){
    console.log(xy)
    xy--
}

let xy1 = 10
do{
    console.log(xy1)
    xy1--    
}
while(xy1 >= 0)

//Q.3
let n = 5
for(let i = 0; i <=n; i++){
    console.log(i)
}

//Q.4
console.log('#')
console.log('# #')
console.log('# # #')
console.log('# # # #')
console.log('# # # # #')
console.log('# # # # # #')

let n1= 5;
let pattern = "";
for (let i = 1; i <= n1; i++) {
   for (let j = 1; j <= i; j++) {
      pattern += ' #';
   }
   pattern += "\n";

}
console.log(pattern);

//Q.5
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

//Q.6
for(let i = 0; i<=10; i++){
    //console.log(i)
    //console.log(i * i)
    //console.log(i * i * i)
    console.log(`${i} ${i * i} ${i * i * i} `)
}

//Q.7
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

//Q.8
for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

//Q.9
 
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
    if (isPrime) {
    console.log(num);
  }
}

//Q.10
let sum = 0
for(let i = 0; i <= 100; i++){
    sum = sum + i
}
console.log("The sum of all numbers from 0 to 100 is",sum)

//Q.11
let sumeven = 0;
let sumodd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumeven = sumeven + i;  
  } else {
    sumodd = sumodd + i;   
  }
}
console.log("Sum of all even numbers ", sumeven);
console.log("Sum of all odd numbers ", sumodd);

//Q.12
let sumeven1 = 0;
let sumodd1 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumeven1 = sumeven1 + i;  
  } else {
    sumodd1 = sumodd1 + i;   
  }
}
let arr = [sumeven1 , sumodd1]
console.log(arr)

//Q.13
let randomnums = []
for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * 100) 
    randomnums.push(random)
} 
console.log(randomnums)

//Q.14
/*
let randomnum = new set()
for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * 100) 
    randomnum.push(random)
} 
let unique = Array.from(randomnum)
console.log(unique)
*/
//Q.15

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';
for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length); 
  randomID += characters[randomIndex]; 
}
console.log(randomID);







  
