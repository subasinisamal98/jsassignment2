//Q.1
let month = prompt("Enter a month:"); 
month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase(); 
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(month + " has 31 days.");
    break;
  
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(month + " has 30 days.");
    break;
  
  case "February":
    console.log(month + " has 28 days.");
    break;

  default:
    console.log("Invalid month. Please enter a valid month name.");
    break;
}
