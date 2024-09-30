
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
//Q.1
let person = ''
let maxskills = ''
for(let user in users){
    let skillcount = users[user].skills.length
    if(skillcount > maxskills){
        maxskills = skillcount
        person = user
    }
}
console.log(person)

//Q.2
 let loggedInCount = 0
    let highPointUsers = 0

    for (let user in users) {
        if (users[user].isLoggedIn) {
            loggedInCount++
        }
        if (users[user].points >= 50) {
            highPointUsers++
        }
    }
console.log(loggedInCount,highPointUsers)

//Q.3
    let mernStack = ['MongoDB', 'Express', 'React', 'Node']
    let mernDevelopers = []
    for (let user in users) {
        let AllMERN = true
        for (let i = 0; i < mernStack.length; i++) {
            if (!users[user].skills.includes(mernStack[i])) {
                AllMERN = false
                break
            }
        }
        if (AllMERN) {
            mernDevelopers.push(user);
        }
    }
    console.log(mernDevelopers)
//Q.4
const reema = Object.assign({}, users)
console.log(reema)

//Q.5
const keys = Object.keys(reema)
console.log(keys)

//Q.6
const values = Object.values(reema)
console.log(values)

//Q.7
let countries = {
    India: {
        capital: 'New Delhi',
        population: 1393409038,
        languages: ['Hindi', 'English']
    },
    USA: {
        capital: 'Washington, D.C.',
        population: 331449281,
        languages: ['English']
    }
}
for(let country in countries){
    let entries = Object.entries(countries)
    console.log(entries)
}
console.log(countries)



