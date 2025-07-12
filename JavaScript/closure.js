function createCounter() {
  let count = 0; // private variable
  return function () {
    return count++; // inner function accessing outer variable
  };
}

const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
