//Q.1
let score = Number(prompt("Enter the student's score:"));
if (score >= 80 && score <= 100) {
   console.log("The grade is A")
} else if (score >= 70 && score <= 79) {
    console.log("The grade is B")
} else if (score >= 60 && score <= 69) {
    console.log("The grade is C")
} else if (score >= 50 && score <= 59) {
    console.log("The grade is D")
} else if (score >= 0 && score <= 49) {
    console.log("The grade is F")
} else {
    console.log("The grade is Fail")
}

//Q.2
let month = prompt("Enter the month:");
if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn")
} else if (month === "december" || month === "january" || month === "february") {
  console.log("The season is Winter");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer");
} else {
  console.log("Invalid month entered.")
}

//Q.3
let day = prompt("What is the day today?")
if (day === "saturday" || day === "sunday") {
  console.log("This is a weekend.")
} else if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "friday"
) {
  console.log("This is a working day.")
} else {
  console.log("Invalid day entered.")
}





