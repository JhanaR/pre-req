function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

let out = outer();
console.log('count', out()); // 1
console.log('count', out()); // 2
console.log('count', out()); // 3
