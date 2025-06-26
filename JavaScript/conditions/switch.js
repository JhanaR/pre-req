var userChoice = 9;
switch (userChoice) {
  case 1:
    console.log("AC");
    break;
  case 2:
    console.log("Fan");
    break;
  case 3:
    console.log("Inverter");
    break;
  default:
    console.log("None of them selected");
    break;
}
// Example of switch statement to determine the day of the week

switch (new Date().getDay()) {//<-- Date is the classin javascript 
//  getDay() is method and it will returns the day of the week (0-6)
  case 0:
    console.log("Sunday");
    day = "sunday"
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
     day = "Thursday"
     console.log("day", day);
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}