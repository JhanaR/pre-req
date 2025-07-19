function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const countUp = outer(); // outer runs, returns inner
countUp(); // 1
countUp(); // 2 — it still remembers `counter`!
