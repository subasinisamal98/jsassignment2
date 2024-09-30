//Q.1
function linearEquation(a,b,c){
    if (a === 0 && b === 0){
        return non
    } else if(a === 0){
        return y = -c/b
    } else if(b === 0){
        return x = -c/a
    } else{
        return "x and y not solved"
    }
}
let value = linearEquation(2,3,-5)
console.log(value)

//Q.2
function Quadratic(a,b,c){
    let discriminant = b * b - 4 *a*c
    if (discriminant > 0){
        let root1 = (-b + Math.sqrt(discriminant))/ (2*a)
        let root2 = (-b - Math.sqrt(discriminant))/ (2*a)
        return [root1,root2]
    } else if (discriminant === 0){
        let root = -b / (2*a)
        return [root]
    } else{
        return[]
    }
}
console.log(Quadratic())
console.log(Quadratic(1,4,4))
console.log(Quadratic(1,-1,-2))
console.log(Quadratic(1,7,12))

//Q.3
function printArray(Array){
    for (let i = 0; i <= Array.length; i++){
        console.log(Array[i])
    }
}
printArray([1,2,3,4,55,6])

//Q.4
function showDateTime(){
    let now = new Date()
    let day = String(now.getDate()).padStart(2, '0')
    let month = String(now.getMonth()+ 1).padStart(2, '0')
    let year = now.getFullYear()
    let hours = String(now.getHours()).padStart(2, '0')
    let minutes = String(now.getMinutes()).padStart(2, '0')
    console.log(day,"/",month,"/",year,hours,":",minutes)
}
showDateTime()

//Q.5
function swapvalue(x,y){
    let swap = x
    x = y
    y = swap
    console.log("x","=>",x, "y","=>",y)
}
swapvalue(3,4)

//Q.6
function reverseArray(arr){
    let reversearr = []
    for(let i = arr.length-1;i>=0;i--){
        reversearr = reversearr + arr[i]
    }
    console.log(reversearr)
}
reverseArray([1,2,3,4,5])

//Q.7
function capitalizeArray(arr){
    let newarray = []
    for (let i = 0; i< arr.length;i++){
        newarray.push(arr[i].toUpperCase())
    }
    console.log(newarray)    
}
capitalizeArray(["apple","banana","orange","lemon"])

//Q.8
function addItem(arr,item){
    arr.push(item)
    console.log(arr)
}
addItem([1,2,3], 4)

//Q.9
function removeItem(arr,index){
    arr.splice(index, 1)
    console.log(arr)
}
removeItem([1,3,2,4,6,5],3)

//Q.10
function sumOfNumber(n){
    let sum = 0
    for(let i = 0; i <=n;i++){
        sum = sum + i
    }
    console.log(sum)
}
sumOfNumber(5)

//Q.11
function sumOfOddNumber(n){
    let sum = 0
    for(let i = 0; i <=n;i++){
        if(i % 2 !== 0){
           sum = sum + i
        }
    }
    console.log(sum)
}
sumOfOddNumber(10)

//Q.12
function sumOfEvenNumber(n){
    let sum = 0
    for(let i = 0; i <=n;i++){
        if(i % 2 === 0){
           sum = sum + i
        }
    }
    console.log(sum)
}
sumOfEvenNumber(10)

//Q.13
function evenAndOdd(n){
    let even = 0
    let odd = 0
    for(let i = 0; i <=n;i++){
        if(i % 2 === 0){
           even++
        }else{
            odd++
        }
    }
    console.log(even)
    console.log(odd)
}
evenAndOdd(50)

//Q.14
function sumOfNumber(arr){
    let sum = 0
    for(let i = 0; i <=arr.length;i++){
        sum = sum + i
    }
    console.log(sum)
}
sumOfNumber([1,2,3,4,5,6,7,8,9,10])

//Q.15
function randomuserIP(){
    return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`
}
console.log(randomuserIP())

//Q,16
//Q.17
function randomHexaNumber(){
    let hexacharacter = '0123456789abcdef'
    let hexa = '#';
    let n1=6
    for (let i = 0; i < n1; i++) {
    let randomIndex = Math.floor(Math.random() * hexacharacter.length); 
    hexa = hexa + hexacharacter[randomIndex]; 
    }
    console.log(hexa);
}
randomHexaNumber()

//Q.18
function userIdGenerator(){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';
    let n=7
    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length); 
      randomID = randomID + characters[randomIndex]; 
    }
    console.log(randomID);
}
userIdGenerator()