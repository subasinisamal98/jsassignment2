//Q.1
const arr = []
const arr1 = Array()
console.log(arr)

//Q.2
let arr2 = [1,2,3,4,5,6]
console.log(arr2)

//Q.3
console.log(arr2.length)

//Q.4
console.log(arr2[0])
console.log(Math.floor(arr2.length/2))
lastitem = arr2[arr2.length-1]
console.log(lastitem)

//Q.5
let mixeddatatype = [20,'Reema',true,null,56.90,[12,20]]
console.log(mixeddatatype.length)

//Q.6
const itCompanies = [
    "Facebook", 
    "Google", 
    "Microsoft", 
    "Apple", 
    "IBM", 
    "Oracle",
    "Amazon"]
//Q.7
console.log(itCompanies)

//Q.8
console.log(itCompanies.length)

//Q.9
console.log(itCompanies[0])
middlecompany = itCompanies[Math.floor(itCompanies.length/2)]
console.log(middlecompany)
lastcompany = itCompanies[itCompanies.length-1]
console.log(lastcompany)

//Q.10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//Q.11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//Q.12
let sentence0 = `${itCompanies.slice(0, -1).join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`
console.log(sentence0)

//Q.13
let check = "IBM"
if(itCompanies.includes(check)){
    console.log(check)
} else{
    console.log('Company is not found')
}

//Q.14
let filteredCompanies = itCompanies.join(',')
    .split(',')
    .filter(company => (company.match(/o/gi) || []).length >= 1);
console.log(filteredCompanies);

//Q.15
console.log(itCompanies.sort())

//Q.16
console.log(itCompanies.reverse())

//Q.17
console.log(itCompanies.slice(0,3))

//Q.18
console.log(itCompanies.slice(4))
console.log(itCompanies.slice(-3))

//Q.19
middlecompany = itCompanies[Math.floor(itCompanies.length/2)]
console.log(middlecompany)

// Q.20
remove = itCompanies.shift()
console.log(itCompanies)

//Q.21
let middleIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
    itCompanies.splice(middleIndex - 1, 2);
} else {
    itCompanies.splice(middleIndex, 1);
}
console.log(itCompanies);

//Q.22
remove = itCompanies.pop()
console.log(itCompanies)

//Q.23
console.log(itCompanies.splice())













