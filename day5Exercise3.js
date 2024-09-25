//Q.1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())

let minAge = Math.min(ages);
console.log(minAge)
let maxAge = Math.max(ages);
console.log(maxAge)

const mid = Math.floor(ages.length / 2)
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[mid - 1] + ages[mid]) / 2;
} else {
    medianAge = ages[mid];
}
console.log(medianAge)

const totalAge = ages.reduce((sum, age) => sum + age, 0);
const averageAge = totalAge / ages.length;
console.log(averageAge);

const ageRange = maxAge - minAge;
console.log(ageRange)

const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);
console.log(minAvgDiff);
console.log(maxAvgDiff);

const countries2 = [
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

console.log(countries2.slice(0, 10));

//Q.2
middlecountries = countries2[Math.floor(countries2.length/2)]
console.log(middlecountries)

//Q.3
const mid1 = Math.ceil(countries2.length / 2)
const firstHalf = countries2.slice(0, mid)
const secondHalf = countries2.slice(mid)
console.log(firstHalf)
console.log(secondHalf)


