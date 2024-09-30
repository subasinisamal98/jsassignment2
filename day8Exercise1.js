//Q.1
let Dog = {}

//Q.2
console.log(Dog)

//Q.3
let dog = {
    name : "Buddy",
    legs : 4,
    color : "brown",
    age : 3,
    bark : function(){
        return "wiif woof"
    }

}

//Q.4
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

//Q.5
let dog1 = {
    name : "Buddy",
    legs : 4,
    color : "brown",
    age : 3,
    bread : "Husky",
    bark : function(){
        return "wiif woof"
    },
    getdoginfo : function(){
        return "Name:" + dog1.name + " " + "Bread:" + dog1.bread + " " +  "Legs:" + dog1.legs
    }
}
console.log(dog1.getdoginfo())

