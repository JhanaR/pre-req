let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkEvenOdd(num) {
  if (typeof num !== "number") {
    return "Not a valid number";
  }
  if (num % 2 === 0) {
    console.log(num + " is even");
    return num;
  } else if (num % 2 === 1) {
    console.log(num + " is odd");
    return num;
  }
}

Array.forEach(checkEvenOdd);
checkEvenOdd(5);
